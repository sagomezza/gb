const aws = require("aws-sdk");
const stripe = require("stripe")(
  "sk_test_51JB3cWHa6BVOF2G8OTB9XQpQ3SUdpB8K4liBFOfjpptJIyS3id0tSEWBdiUPzAPVpg2E7MDBEHczWO2ZfMGPl25F00atJWRRdz"
); // TODO instance

const ddb = new aws.DynamoDB();
const sns = new aws.SNS();

const { v4: uuidv4 } = require("uuid");

const delay = (ms) => {
  let timeout;

  return new Promise((res) => {
    timeout = setTimeout(() => {
      res();

      clearTimeout(timeout);
    }, ms);
  });
};

const StripeError = function (error) {
  var innerError = {
    message: error.message,
    rawType: error.rawType,
    type: error.type,
    stack: error.stack,
    code: error.code,
    param: error.param,
  };

  this.name = "StripeError";
  Error.captureStackTrace(this, this.constructor);
  this.message = JSON.stringify(innerError);
  this.stack = error.stack;
};
StripeError.prototype = new Error();

exports.handler = async (event, context) => {
  console.log(`event ${JSON.stringify(event)}`);
  console.log(`context ${JSON.stringify(context)}`);

  const date = new Date();

  const cognitoidentityserviceprovider = new aws.CognitoIdentityServiceProvider();

  const externalProvider =
    event &&
    event.request &&
    event.request.userAttributes &&
    event.request.userAttributes["cognito:user_status"]
      ? event.request.userAttributes["cognito:user_status"]
      : false;

  const userPoolId =
    event && event.userPoolId ? event.userPoolId : "us-east-1_C6MtzIzAP";
  const idSettings = uuidv4();
  let stripeCustomerId = "";

  let endpointArn = "";

  const iosArn = "arn:aws:sns:us-east-1:534788690366:app/APNS/splashspot-ios";
  const androidArn =
    "arn:aws:sns:us-east-1:534788690366:app/GCM/splashspot-android";
  let cognitoUser = "";

  if (externalProvider === "EXTERNAL_PROVIDER") {
    const platformEndpoint = "EXTERNAL_PROVIDER";

    if (event.request.userAttributes.sub) {
      const email = event.request.userAttributes.email;
      const sub = event.request.userAttributes.sub;

      try {
        await stripe.customers.create(
          {
            name: email,
            email: email,
            metadata: {
              cognito_id: sub,
            },
          },
          function (err, customer) {
            // asynchronously called
            if (err) {
              console.error("Stripe error: ", JSON.stringify(err, null, 2));
              const stripeError = new StripeError(err);
              callback(stripeError, null); // exit
            } else {
              console.log("customer: " + JSON.stringify(customer));
              stripeCustomerId = customer.id;
            }
          }
        );
      } catch (error) {
        console.log("Error: creating stripe customer ", error);
      }
      await delay(1000);
      console.log("stripeCustomerId: " + JSON.stringify(stripeCustomerId));

      const group = "User";

      const paramsInstatoolzPostConfirmation = {
        Item: {
          id: { S: event.request.userAttributes.sub },
          owner: { S: event.request.userAttributes.sub },
          __typename: { S: "User" },
          name: {
            S: `${email}`,
          },
          deviceId: { S: `EXTERNAL_PROVIDER` },
          deviceToken: { S: `EXTERNAL_PROVIDER` },
          platform: { S: `EXTERNAL_PROVIDER` },
          stripeCustomerId: { S: `${stripeCustomerId}` },
          endpointArn: { S: `EXTERNAL_PROVIDER` },
          business: {
            S: `EXTERNAL_PROVIDER`,
          },
          email: { S: email },
          username: { S: event.userName },
          phone: {
            S: "EXTERNAL_PROVIDER",
          },
          premium: { BOOL: false },
          status: { BOOL: true },
          userSettingId: { S: idSettings },
          userGroup: {
            S: group,
          },
          createdAt: { S: date.toISOString() },
          updatedAt: { S: date.toISOString() },
        },
        TableName: process.env.USERTABLE,
      };

      console.log(
        "Success: user params",
        JSON.stringify(paramsInstatoolzPostConfirmation)
      );

      const paramsInstatoolzSettingsPostConfirmation = {
        Item: {
          id: { S: idSettings },
          settingOwnerId: { S: event.userName },
          __typename: { S: "Setting" },
          radius: { N: "20" },
          categories: { SS: ["Camping", "Fishing", "Swimming"] },
          createdAt: { S: date.toISOString() },
          updatedAt: { S: date.toISOString() },
        },
        TableName: process.env.SETTINGSTABLE,
      };

      // Call DynamoDB Users
      try {
        await ddb.putItem(paramsInstatoolzPostConfirmation).promise();
        console.log("Success User");
      } catch (err) {
        console.log("Error user", err);
        const response = {
          statusCode: 400,
          body: { message: "Error trying to create User", error: err },
          headers: {
            "Content-Type": "application/json",
          },
        };
        context.done(null, response);
      }

      try {
        let paramsGruopInstatoolzPostConfirmation = {
          GroupName: group,
          UserPoolId: userPoolId,
          Username: event.userName,
        };
        const addGroupResponse = await cognitoidentityserviceprovider
          .adminAddUserToGroup(paramsGruopInstatoolzPostConfirmation)
          .promise()
          .then(() => {
            console.log("Success: add group correctly");
          })
          .catch((err) => {
            console.log("error: add group", err);
          });
        console.log("Success: add group correctly", addGroupResponse);
      } catch (error) {
        console.log("error: add group in catch", error);
        const response = {
          statusCode: 400,
          body: { message: "Error trying to add user to group", error: error },
          headers: {
            "Content-Type": "application/json",
          },
        };
        context.done(null, response);
      }

      // Call DynamoDB Settings
      try {
        await ddb.putItem(paramsInstatoolzSettingsPostConfirmation).promise();
        console.log("Success Settings");
      } catch (err) {
        console.log("Error settings", err);
        const response = {
          statusCode: 400,
          body: {
            message: "Error trying to create Settings for user",
            error: err,
          },
          headers: {
            "Content-Type": "application/json",
          },
        };
        context.done(null, response);
      }

      console.log("Success: Everything executed correctly");
      context.done(null, event);
    } else {
      // Nothing to do, the user's email ID is unknown
      console.log("Error: Nothing was written to DynamoDB");
      context.done(null, event);
    }
  } else {
    const platformEndpoint =
      event.request.clientMetadata.platform === "android" ? androidArn : iosArn;

    if (event.request.userAttributes.sub) {
      let paramsEndpoint = {
        PlatformApplicationArn: platformEndpoint,
        Token: event.request.clientMetadata.deviceId,
        CustomUserData: event.request.userAttributes.sub,
        Attributes: { UserId: event.userName },
      };

      try {
        endpointArn = await sns
          .createPlatformEndpoint(paramsEndpoint)
          .promise();
        console.log("Success: creating endpoint arn");
      } catch (error) {
        console.log("Error: creating endpoint arn ", error);
      }

      try {
        await stripe.customers.create(
          {
            name: event.request.clientMetadata.name,
            email: event.request.userAttributes.email,
            metadata: {
              cognito_id: event.userName,
            },
          },
          function (err, customer) {
            // asynchronously called
            if (err) {
              console.error("Stripe error: ", JSON.stringify(err, null, 2));
              const stripeError = new StripeError(err);
              callback(stripeError, null); // exit
            } else {
              console.log("customer: " + JSON.stringify(customer));
              stripeCustomerId = customer.id;
            }
          }
        );
      } catch (error) {
        console.log("Error: creating stripe customer ", error);
      }
      await delay(1000);
      console.log("stripeCustomerId: " + JSON.stringify(stripeCustomerId));

      try {
        let params = {
          UserPoolId: userPoolId,
          Username: event.userName,
        };
        const getUserCognito = await cognitoidentityserviceprovider
          .adminGetUser(params)
          .promise()
          .then((data) => {
            let obj = {};
            console.log("Success: get User correctly ", JSON.stringify(data));
            data?.UserAttributes.forEach(
              (item) => (obj[`${item.Name}`] = item.Value)
            );
            cognitoUser = { ...obj };
            return data;
          })
          .catch((err) => {
            console.log("error: get user", err);
          });

        console.log("Success: get user correctly", getUserCognito);
        console.log("Success: get user correctly", cognitoUser);
      } catch (error) {
        console.log("error: get user in catch", error);
        const response = {
          statusCode: 400,
          body: { message: "Error trying to get user", error: error },
          headers: {
            "Content-Type": "application/json",
          },
        };
        context.done(null, response);
      }

      const group =
        cognitoUser &&
        cognitoUser["custom:group"] &&
        cognitoUser["custom:group"] === "business"
          ? "Business"
          : "User";

      const isPremium =
        cognitoUser && cognitoUser["custom:business"]
          ? true
          : event?.request?.clientMetadata?.business
          ? true
          : false;

      const paramsInstatoolzPostConfirmation = {
        Item: {
          id: { S: event.request.userAttributes.sub },
          owner: { S: event.request.userAttributes.sub },
          __typename: { S: "User" },
          name: {
            S: `${
              cognitoUser && cognitoUser["custom:name"]
                ? cognitoUser["custom:name"]
                : event.request.clientMetadata.name
            }`,
          },
          deviceId: { S: `${event.request.clientMetadata.deviceId}` },
          deviceToken: { S: `${event.request.clientMetadata.deviceToken}` },
          platform: { S: `${event.request.clientMetadata.platform}` },
          stripeCustomerId: { S: `${stripeCustomerId}` },
          endpointArn: { S: `${endpointArn?.EndpointArn}` },
          business: {
            S: `${
              cognitoUser && cognitoUser["custom:business"]
                ? cognitoUser["custom:business"]
                : event?.request?.clientMetadata?.business
            }`,
          },
          email: { S: event.request.userAttributes.email },
          username: { S: event.request.userAttributes.email },
          phone: {
            S:
              cognitoUser && cognitoUser["custom:phone"]
                ? cognitoUser["custom:phone"]
                : event?.request?.clientMetadata?.phone,
          },
          premium: { BOOL: false },
          status: { BOOL: true },
          userSettingId: { S: idSettings },
          userGroup: {
            S: group,
          },
          createdAt: { S: date.toISOString() },
          updatedAt: { S: date.toISOString() },
        },
        TableName: process.env.USERTABLE,
      };

      console.log(
        "Success: user params",
        JSON.stringify(paramsInstatoolzPostConfirmation)
      );

      const paramsInstatoolzSettingsPostConfirmation = {
        Item: {
          id: { S: idSettings },
          settingOwnerId: { S: event.request.userAttributes.sub },
          __typename: { S: "Setting" },
          radius: { N: "20" },
          categories: { SS: ["Camping", "Fishing", "Swimming"] },
          createdAt: { S: date.toISOString() },
          updatedAt: { S: date.toISOString() },
        },
        TableName: process.env.SETTINGSTABLE,
      };

      // Call DynamoDB Users
      try {
        await ddb.putItem(paramsInstatoolzPostConfirmation).promise();
        console.log("Success User");
      } catch (err) {
        console.log("Error user", err);
        const response = {
          statusCode: 400,
          body: { message: "Error trying to create User", error: err },
          headers: {
            "Content-Type": "application/json",
          },
        };
        context.done(null, response);
      }

      try {
        let paramsGruopInstatoolzPostConfirmation = {
          GroupName: group,
          UserPoolId: userPoolId,
          Username: event.userName,
        };
        const addGroupResponse = await cognitoidentityserviceprovider
          .adminAddUserToGroup(paramsGruopInstatoolzPostConfirmation)
          .promise()
          .then(() => {
            console.log("Success: add group correctly");
          })
          .catch((err) => {
            console.log("error: add group", err);
          });
        console.log("Success: add group correctly", addGroupResponse);
      } catch (error) {
        console.log("error: add group in catch", error);
        const response = {
          statusCode: 400,
          body: { message: "Error trying to add user to group", error: error },
          headers: {
            "Content-Type": "application/json",
          },
        };
        context.done(null, response);
      }

      // Call DynamoDB Settings
      try {
        await ddb.putItem(paramsInstatoolzSettingsPostConfirmation).promise();
        console.log("Success Settings");
      } catch (err) {
        console.log("Error settings", err);
        const response = {
          statusCode: 400,
          body: {
            message: "Error trying to create Settings for user",
            error: err,
          },
          headers: {
            "Content-Type": "application/json",
          },
        };
        context.done(null, response);
      }

      console.log("Success: Everything executed correctly");
      context.done(null, event);
    } else {
      // Nothing to do, the user's email ID is unknown
      console.log("Error: Nothing was written to DynamoDB");
      context.done(null, event);
    }
  }
};
