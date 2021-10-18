import * as React from 'react';

import {
  useRegisterEndpointArnNotificationMutation,
  useDeleteEndpointArnNotificationMutation,
  UserPushRegisterInput,
  UserPushDeleteInput,
} from 'lib/api';

export const useSendNotificationMutations = () => {
  const [errorResponses, setErrorResponses] = React.useState<null | object>({
    error: {},
    type: '',
  });

  const { isLoading: isLoadingEndpoint, mutateAsync: createEndpointMutation } =
    useRegisterEndpointArnNotificationMutation();
  const { isLoading: isLoadingEndpointDelete, mutateAsync: deleteEndpointMutation } =
    useDeleteEndpointArnNotificationMutation();

  const createUserEndpoint = async (body: UserPushRegisterInput) => {
    try {
      await createEndpointMutation(
        { body },
        {
          onSuccess: () => {},
        },
      );
    } catch (error) {
      // To Do
      setErrorResponses({
        error,
        type: '',
      });
    }
  };
  const deleteUserEndpoint = async (body: UserPushDeleteInput) => {
    try {
      await deleteEndpointMutation(
        { body },
        {
          onSuccess: () => {},
        },
      );
    } catch (error) {
      // To Do
      setErrorResponses({
        error,
        type: '',
      });
    }
  };

  return {
    createUserEndpoint,
    deleteUserEndpoint,
    isLoadingEndpoint,
    isLoadingEndpointDelete,
    errors: errorResponses,
  };
};
