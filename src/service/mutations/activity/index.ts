import { amplifyFetcher } from 'amplify/fetcher';
import { CreateActivityMutation, CreateActivityMutationVariables } from 'lib/api';
import { UseMutationOptions, useMutation } from 'react-query';

export const CreateActivityDocument = `
    mutation CreateActivity($input: CreateActivityInput!, $condition: ModelActivityConditionInput) {
  createActivity(input: $input, condition: $condition) {
    id
    title
    description
    location
    address
    gps {
      lon
      lat
    }
    invitePushSent
    startAt
    endsAt
    activityDate
    pictures
    available
    status
    activityOwnerId
    owner {
      id
      owner
      userGroup
      name
      age
      city
      state
      description
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
        categories
        radius
        icon
        settingOwnerId
        createdAt
        updatedAt
      }
      gyms {
        nextToken
      }
      notification {
        nextToken
        scannedCount
        count
      }
      bulletin {
        nextToken
        scannedCount
        count
      }
      activity {
        nextToken
      }
      chat {
        nextToken
      }
      chatReceiver {
        nextToken
      }
      messages {
        nextToken
      }
    }
    createdAt
    updatedAt
  }
}
    `;
export const useCreateActivityMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    CreateActivityMutation,
    TError,
    CreateActivityMutationVariables,
    TContext
  >,
) =>
  useMutation<CreateActivityMutation, TError, CreateActivityMutationVariables, TContext>(
    (variables?: CreateActivityMutationVariables) =>
      amplifyFetcher<CreateActivityMutation, CreateActivityMutationVariables>(
        CreateActivityDocument,
        variables,
      )(),
    options,
  );
