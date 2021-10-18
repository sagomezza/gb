const aws = require('aws-sdk');

exports.handler = async (event, context) => {
  console.log(`event ${JSON.stringify(event)}`);

  const cognitoidentityserviceprovider = new aws.CognitoIdentityServiceProvider();

  const user = JSON.parse(event.arguments.user);
  const userPoolId = event && event.userPoolId ? event.userPoolId : 'us-east-1_n1te2WG7C';

  if (user && user.id) {
    try {
      let params = {
        UserPoolId: userPoolId,
        Username: user.id,
      };
      if (user && user.status) {
        const addGroupResponse = await cognitoidentityserviceprovider
          .adminEnableUser(params)
          .promise()
          .then(() => {
            console.log('Success: Enable User correctly');
          })
          .catch((err) => {
            console.log('error: Enable User', err);
          });
        console.log('Success: Enable User correctly', addGroupResponse);
      } else {
        const addGroupResponse = await cognitoidentityserviceprovider
          .adminDisableUser(params)
          .promise()
          .then(() => {
            console.log('Success: Disabled User correctly');
          })
          .catch((err) => {
            console.log('error: Disabled User', err);
          });
        console.log('Success: Disabled User correctly', addGroupResponse);
      }
    } catch (error) {
      console.log('error: Enable User in catch', error);
    }

    console.log('Success: Everything executed correctly');
    context.done(null, event);
  } else {
    // Nothing to do, the user's email ID is unknown
    console.log('Error: Nothing was written to DynamoDB');
    context.done(null, event);
  }
};
