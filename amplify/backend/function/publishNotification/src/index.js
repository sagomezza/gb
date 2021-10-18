const aws = require('aws-sdk');
const ddb = new aws.DynamoDB.DocumentClient({ region: process.env.REGION });
const sns = new aws.SNS();

const { v4: uuidv4 } = require('uuid');

exports.handler = async (event, context) => {
  console.log(`event ${JSON.stringify(event)}`);

  const notification = event.arguments.body;

  let notificationResponse = '';

  const { subject, message, endpointArn } = notification;

  const idNotification = uuidv4();

  if (notification.endpointArn) {
    let paramsTarget = {
      Message: message,
      Subject: subject,
      TargetArn: endpointArn,
    };

    try {
      notificationResponse = await sns.publish(paramsTarget).promise();
      console.log('Success: creating sending a push notification');
    } catch (error) {
      console.log('Error: sending a push notification ', error);
      const response = {
        statusCode: 400,
        body: { message: 'Error trying to send a push notification', error },
        headers: {
          'Content-Type': 'application/json',
        },
      };
      context.done(null, response);
    }

    const createNotificationMessage = {
      Item: {
        id: idNotification,
        message: message,
        subject: subject,
        targetArn: endpointArn,
      },
      TableName: `${process.env.NOTIFICATIONTABLE}${process.env.ENV}`,
    };

    // Call DynamoDB Notification
    try {
      await ddb.put(createNotificationMessage).promise();
      console.log('Success create notification');
    } catch (err) {
      console.log('Error create notification', err);
      const response = {
        statusCode: 400,
        body: { message: 'Error trying to create notification', error: err },
        headers: {
          'Content-Type': 'application/json',
        },
      };
      context.done(null, response);
    }

    console.log('Success: Everything executed correctly');
    const response = `Notification sent, response: ${notificationResponse}`;
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
