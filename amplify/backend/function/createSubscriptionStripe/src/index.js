/**
 Backend API for Stripe.
  */

const AWS = require('aws-sdk');
const jwk = require('jsonwebtoken');
const stripe = require('stripe')(
  'pk_test_51JkxHKH8IkInFJx5hqgfulgQvR2O9jrgPNamFhfO9v9plV53EECCfDdA0Yg8FnqxsCvS2ja5WFrsVLPp9Uk2OxpJ002KJhuXtu',
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

  const body = JSON.parse(data);

  const email = body?.email;
  console.log('email ', email);

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
  let paymentMethods = '';
  console.log('userFound ', userFound);
  const stripeCustomerId = userFound?.Items[0].stripeCustomerId;
  console.log('stripeCustomerId ', stripeCustomerId);

  try {
    paymentMethods = await stripe.paymentMethods.list({
      customer: stripeCustomerId,
      type: 'card',
    });
  } catch (error) {
    console.error('Stripe error paymentMethods list: ', JSON.stringify(error, null, 2));
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

  console.log('paymentMethods?.data[0].id ', paymentMethods?.data[0].id);

  try {
    await stripe.customers.update(stripeCustomerId, {
      payment_method: paymentMethods?.data[0].id,
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

  try {
    subscription = await stripe.subscriptions.create({
      customer: stripeCustomerId,
      items: [{ price: 'price_1JahDsHa6BVOF2G8Agr0OKSJ' }],
      default_payment_method: paymentMethods?.data[0].id,
    });
  } catch (error) {
    console.error('Stripe error: ', JSON.stringify(error, null, 2));
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
  // Pass the client secret to the client
  const response = {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(subscription),
  };
  context.done(null, response);
};
