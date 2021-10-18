const aws = require('aws-sdk');
const ddb = new aws.DynamoDB.DocumentClient({ region: process.env.REGION });
const sns = new aws.SNS();

exports.handler = async (event, context) => {
  console.log(`event ${JSON.stringify(event)}`);

  const user = event.arguments.body;

  if (user.userId) {
    let userFound = '';

    const findUserById = {
      TableName: `${process.env.USERTABLE}${process.env.ENV}`,
      KeyConditionExpression: 'begins_with(#ID,:id)',
      ExpressionAttributeValues: {
        ':id': user.userId,
      },
      ExpressionAttributeNames: {
        '#ID': 'id',
      },
      FilterExpression: 'begins_with(#ID, :id)',
      ProjectionExpression: 'id, stripeCustomerId, endpointArn',
    };

    try {
      userFound = await ddb.scan(findUserById).promise();
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

    const endpointArn = userFound?.Items[0].endpointArn;

    const { userId } = user;
    let paramsEndpoint = {
      EndpointArn: endpointArn,
    };
    try {
      endpointArn = await sns.deleteEndpoint(paramsEndpoint).promise();
      console.log('Success: deleting endpoint arn ');
    } catch (error) {
      console.log('Error: deleting endpoint arn ', error);
      const response = {
        statusCode: 400,
        body: { message: 'Error trying to delete endpoint', error },
        headers: {
          'Content-Type': 'application/json',
        },
      };
    }

    const updateUserArn = {
      Key: {
        id: userId,
      },
      ExpressionAttributeValues: {
        ':endpointArn': '',
        ':platform': '',
        ':deviceId': '',
      },
      UpdateExpression: `set endpointArn = :endpointArn, platform = :platform, deviceId = :deviceId`,
      TableName: `${process.env.USERTABLE}${process.env.ENV}`,
    };

    // Call DynamoDB Spot
    try {
      await ddb.update(updateUserArn).promise();
      console.log('Success Update user, logout');
    } catch (err) {
      console.log('Error user update logout', err);
      const response = {
        statusCode: 400,
        body: { message: 'Error trying to update User table', error: err },
        headers: {
          'Content-Type': 'application/json',
        },
      };
    }

    console.log('Success: Everything executed correctly');
    const response = {
      statusCode: 200,
      body: { endpointArn, message: 'Success deleting endpoint' },
      headers: {
        'Content-Type': 'application/json',
      },
    };
    context.done(null, response);
  } else {
    // Nothing to do, the user's email ID is unknown
    console.log('Error: Nothing was written to DynamoDB');
    const response = {
      statusCode: 400,
      body: { endpointArn, message: 'Error deleting endpoint' },
      headers: {
        'Content-Type': 'application/json',
      },
    };
    context.done(null, response);
  }
};
