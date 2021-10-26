import { amplifyFetcher } from 'amplify/fetcher';
import { UpdateUserMutation, UpdateUserMutationVariables } from 'lib/api';
import { useMutation, UseMutationOptions } from 'react-query';

export const UpdateUserDocument = `
    mutation UpdateUser($input: UpdateUserInput!, $condition: ModelUserConditionInput) {
  updateUser(input: $input, condition: $condition) {
    age
    city
    state
    description
    id
    owner
    userGroup
    name
    business
    deviceId
    deviceToken
    platform
    stripeCustomerId
    stripeSubscription
    stripeSubscriptionId
    endpointArn
    email
    username
    birthdate
    gender
    address
    phone
    status
    premium
    trainer
    gps {
      lon
      lat
    }
    photo
    createdAt
    updatedAt
    userSettingId
    userSuscriptionId
    setting {
      id
      radius
      categories
    }
  }
}
    `;
export const useUpdateUserMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<UpdateUserMutation, TError, UpdateUserMutationVariables, TContext>,
) =>
  useMutation<UpdateUserMutation, TError, UpdateUserMutationVariables, TContext>(
    (variables?: UpdateUserMutationVariables) =>
      amplifyFetcher<UpdateUserMutation, UpdateUserMutationVariables>(
        UpdateUserDocument,
        variables,
      )(),
    options,
  );
