/* eslint-disable no-extra-boolean-cast */
/* eslint-disable no-console */
// @ts-nocheck
import * as React from 'react';

import { Auth } from 'aws-amplify';

import { ISignUpResult } from 'amazon-cognito-identity-js';
import { API } from 'amplify/fetcher';

import usePushNotifications from 'hooks/push-notifications';
import { isAndroid } from 'utils/responsive';
import { useSendNotificationMutations } from './notifications';

export const useAuth = () => {
  const [errorResponses, setErrorResponses] = React.useState({ error: null, type: '' });

  const { deviceToken } = usePushNotifications();
  const token = deviceToken?.token;

  const { createUserEndpoint, deleteUserEndpoint } = useSendNotificationMutations();

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

  const signUp = async ({ password, phone_number, user, username }): Promise<ISignUpResult> => {
    try {
      const { name } = user;
      const group = 'User';
      const business = 'no-business';
      const response = await Auth.signUp({
        password,
        username,
        attributes: {
          phone_number,
          'custom:group': group,
          'custom:business': business,
          'custom:name': name,
          'custom:phone': phone_number,
        },
        clientMetadata: {
          groupName: group,
          'custom:group': group,
          'custom:business': business,
          'custom:name': name,
          'custom:phone': phone_number,
          business,
          deviceId: token,
          deviceToken: token,
          platform,
          group,
          name,
          phone: phone_number,
        },
      });

      return response;
    } catch (error) {
      return error;
    }
  };

  const registerNotificationsArn = async () => {
    if (!!token) {
      try {
        const session = await getCurrentSessionUser();
        const userId = session?.idToken?.payload?.sub;
        const body = {
          userId,
          platform: isAndroid ? 'android' : 'ios',
          deviceId: token,
        };

        await createUserEndpoint(body);
      } catch (error) {
        console.error('Error creating endpointArn: ', error);
      }
    }
  };

  const signIn = async ({ password, username }): Promise<ISignUpResult> => {
    try {
      const response = await Auth.signIn({
        password,
        username,
      });

      await API.updateIsSignedIn(true);
      return response;
    } catch (error) {
      return error;
    }
  };

  const removeNotificationsArn = async () => {
    try {
      const session = await getCurrentSessionUser();
      const userId = session?.idToken?.payload?.sub;
      const body = {
        endpointArn: 'signout',
        userId,
      };

      await deleteUserEndpoint(body);
    } catch (error) {
      console.error('Error removing endpointArn: ', error);
    }
  };

  // eslint-disable-next-line consistent-return
  const signOut = async () => {
    try {
      await removeNotificationsArn();
      await Auth.signOut();
      API.updateIsSignedIn(false);
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
          deviceToken: token,
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

  const resendSignUp = async ({ user, username }) => {
    try {
      const { deviceId } = user;

      const clientMetadata = {
        deviceId,
        deviceToken: token,
        platform,
      };
      const data = await Auth.resendSignUp(username, clientMetadata);

      return data;
    } catch (error) {
      setErrorResponses({ error, type: 'resendSignUp' });

      return error;
    }
  };

  return {
    confirmSignUp,
    errorResponses,
    forgotPassword,
    getCurrentSessionUser,
    getCurrentUserCredentials,
    registerNotificationsArn,
    removeNotificationsArn,
    resendSignUp,
    signIn,
    signOut,
    signUp,
    forgotPasswordSubmit,
  };
};
