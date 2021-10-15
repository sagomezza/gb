import * as React from 'react';
import { Auth } from 'aws-amplify';
import { ISignUpResult } from 'amazon-cognito-identity-js';
import { API } from 'amplify/fetcher';
import { isAndroid } from 'utils/responsive';

export const useAuth = () => {
  const [errorResponses, setErrorResponses] = React.useState({ error: null, type: '' });

  const platform = isAndroid ? 'android' : 'ios';

  const getCurrentSessionUser = async () => {
    try {
      const currentUser = await Auth.currentSession();

      return currentUser;
    } catch (error) {
      return error;
    }
  };

  const getCurrentUserCredentials = async () => {
    try {
      const currentUser = await Auth.currentUserCredentials();

      return currentUser;
    } catch (error) {
      return error;
    }
  };

  // ToDo read all methods of Amplify.Auth here -> https://aws-amplify.github.io/amplify-js/api/classes/authclass.html

  const signUp = async ({ password, phone_number, username }): Promise<ISignUpResult> => {
    try {
      const response = await Auth.signUp({
        password,
        username,
        attributes: {
          phone_number,
        },
      });

      return response;
    } catch (error) {
      return error;
    }
  };

  const signIn = async ({ password, username }): Promise<ISignUpResult> => {
    try {
      const response = await Auth.signIn({
        password,

        username,
      });

      return response;
    } catch (error) {
      return error;
    }
  };

  const forgotPassword = async ({ username }) => {
    try {
      const data = await Auth.forgotPassword(username);

      return data;
    } catch (error) {
      setErrorResponses({ error, type: 'forgotPassword' });

      return error;
    }
  };

  const forgotPasswordSubmit = async ({ code, password, username }) => {
    try {
      const data = await Auth.forgotPasswordSubmit(username, code, password);

      return data;
    } catch (error) {
      setErrorResponses({ error, type: 'forgotPasswordSubmit' });

      return error;
    }
  };

  /**
   * confirmSignUp Method is used for confirming Verification Code sent to email
   * Ref: https://aws-amplify.github.io/amplify-js/api/classes/authclass.html#confirmsignup
   */

  const confirmSignUp = async ({ code, user, username }) => {
    try {
      const { deviceId } = user;

      const options = {
        clientMetadata: {
          deviceId,
          platform,
        },
      };
      const data = await Auth.confirmSignUp(username, code, options);

      return data;
    } catch (error) {
      setErrorResponses({ error, type: 'confirmSignUp' });

      return error;
    }
  };

  /**
   * resendSignUp Method is used to send Verification Code sent to email
   * Ref: https://aws-amplify.github.io/amplify-js/api/classes/authclass.html#resendsignup
   */

  const resendSignUp = async ({ username }) => {
    try {
      const data = await Auth.resendSignUp(username);

      return data;
    } catch (error) {
      setErrorResponses({ error, type: 'resendSignUp' });

      return error;
    }
  };

  // eslint-disable-next-line consistent-return
  const signOut = async () => {
    try {
      await Auth.signOut();
      API.updateIsSignedIn(false);
    } catch (error) {
      return error;
    }
  };

  return {
    confirmSignUp,
    getCurrentUserCredentials,
    getCurrentSessionUser,
    errorResponses,
    forgotPassword,
    forgotPasswordSubmit,
    resendSignUp,
    signUp,
    signIn,
    signOut,
  };
};
