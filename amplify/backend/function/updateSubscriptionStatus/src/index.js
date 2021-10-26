'use strict';

/**
 Backend API for Stripe.
 date: Aug 10, 2018
 */

const AWS = require('aws-sdk');
const jwk = require('jsonwebtoken');
const stripe = require('stripe')(
  'sk_test_51JkxHKH8IkInFJx5y6Shhb7i2KlKgLeaKXYU1KNYtPXepGRVNoTj9USVXuTeguqbql5GNXYUIaXXut7FtRm9STPq00kxM4fbgY',
); // TODO instance
const ddb = new AWS.DynamoDB.DocumentClient({ region: process.env.REGION });

let StripeError = function (error) {
  var innerError = {
    message: error.message,
    rawType: error.rawType,
    type: error.type,
    stack: error.stack,
    code: error.code,
    param: error.param,
  };

  this.name = 'StripeError';
  Error.captureStackTrace(this, this.constructor);
  this.message = JSON.stringify(innerError);
  this.stack = error.stack;
};
StripeError.prototype = new Error();

exports.handler = async (event, context) => {
  console.log('Event ', JSON.stringify(event));

  const data = event && event.arguments && event.arguments.body ? event.arguments.body : event.body;
  console.log('data ', data);

  const body = event && event.arguments && event.arguments.body ? data : JSON.parse(data);

  const email = body?.email;
  const status = body?.status;
  console.log('email ', email);
  console.log('status ', status);

  let userFound = '';

  const findUserByEmail = {
    TableName: `${process.env.USERTABLE}${process.env.ENV}`,
    KeyConditionExpression: 'begins_with(#E,:email)',
    ExpressionAttributeValues: {
      ':email': email,
    },
    ExpressionAttributeNames: {
      '#E': 'email',
    },
    FilterExpression: 'begins_with(#E, :email)',
    ProjectionExpression: 'id, stripeCustomerId',
  };

  try {
    userFound = await ddb.scan(findUserByEmail).promise();
    console.log('Query User Success ', JSON.stringify(userFound));
  } catch (err) {
    console.log('Error Query', err);
    const response = {
      statusCode: 400,
      body: { message: `Error trying to scan User with filter ${err}` },
      headers: {
        'Content-Type': 'application/json',
      },
    };
    context.done(null, response);
  }

  let subscription = '';
  let customerSubscription = '';
  console.log('userFound ', userFound);
  const stripeCustomerId = userFound?.Items[0].stripeCustomerId;
  console.log('stripeCustomerId ', stripeCustomerId);

  try {
    customerSubscription = await stripe.subscriptions.list({
      customer: stripeCustomerId,
    });
  } catch (error) {
    console.error('Stripe error customerSubscription list: ', JSON.stringify(error, null, 2));
    const stripeError = new StripeError(error);
    const response = {
      statusCode: 400,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(stripeError),
    };
    context.done(null, response);
  }

  console.log('customerSubscription?.data[0].id ', customerSubscription?.data[0].id);

  try {
    subscription = await stripe.subscriptions.update(customerSubscription?.data[0]?.id, {
      cancel_at_period_end: status,
    });
  } catch (error) {
    console.error('Stripe error customers: ', JSON.stringify(error, null, 2));
    const stripeError = new StripeError(error);
    const response = {
      statusCode: 400,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(stripeError),
    };
  }

  // Pass the client secret to the client
  const response = {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body:
      event && event.arguments && event.arguments.body
        ? subscription
        : JSON.stringify(subscription),
  };
  context.done(null, response);
};
