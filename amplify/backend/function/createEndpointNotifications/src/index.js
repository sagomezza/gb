const aws = require('aws-sdk');
const ddb = new aws.DynamoDB.DocumentClient({ region: process.env.REGION });
const sns = new aws.SNS();

exports.handler = async (event, context) => {
  console.log(`event ${JSON.stringify(event)}`);

  const user = event.arguments.body;

  const { platform, deviceId, userId } = user;

  const iosArn = 'arn:aws:sns:us-east-1:484188761906:app/APNS/gymbuddy-ios';
  const androidArn = 'arn:aws:sns:us-east-1:484188761906:app/GCM/gymbuddy-android';

  const platformEndpoint = platform === 'android' ? androidArn : iosArn;

  let endpointArn = '';

  if (user.deviceId) {
    let paramsEndpoint = {
      PlatformApplicationArn: platformEndpoint,
      Token: deviceId,
      CustomUserData: userId,
      Attributes: { UserId: userId },
    };
    try {
      endpointArn = await sns.createPlatformEndpoint(paramsEndpoint).promise();
      console.log('Success: creating endpoint arn');
    } catch (error) {
      console.log('Error: creating endpoint arn ', error);
      const response = {
        statusCode: 400,
        body: { message: 'Error trying to create ENDPOINT', error },
        headers: {
          'Content-Type': 'application/json',
        },
      };
      context.done(null, response);
    }

    const updateUserArn = {
      Key: {
        id: userId,
      },
      ExpressionAttributeValues: {
        ':endpointArn': endpointArn?.EndpointArn,
        ':platform': platform,
        ':deviceId': deviceId,
      },
      UpdateExpression: `set endpointArn = :endpointArn, platform = :platform, deviceId = :deviceId`,
      TableName: `${process.env.USERTABLE}${process.env.ENV}`,
    };

    // Call DynamoDB Spot
    try {
      await ddb.update(updateUserArn).promise();
      console.log('Success Update user');
    } catch (err) {
      console.log('Error user update', err);
      const response = {
        statusCode: 400,
        body: { message: 'Error trying to create ENDPOINT', error: err },
        headers: {
          'Content-Type': 'application/json',
        },
      };
      context.done(null, response);
    }

    console.log('Success: Everything executed correctly');
    const response = endpointArn?.EndpointArn;
    context.done(null, response);
  } else {
    // Nothing to do, the user's email ID is unknown
    console.log('Error: Nothing was written to DynamoDB');
    const response = {
      statusCode: 400,
      body: { message: 'Error trying to create ENDPOINT' },
      headers: {
        'Content-Type': 'application/json',
      },
    };
    context.done(null, response);
  }
};
