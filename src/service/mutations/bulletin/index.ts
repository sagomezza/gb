import { amplifyFetcher } from 'amplify/fetcher';
import { CreateBulletinMutation, CreateBulletinMutationVariables } from 'lib/api';
import { useMutation, UseMutationOptions } from 'react-query';

export const CreateBulletinDocument = `
    mutation CreateBulletin($input: CreateBulletinInput!, $condition: ModelBulletinConditionInput) {
  createBulletin(input: $input, condition: $condition) {
    id
    title
    description
    category
    photos
    bulletinOwnerId
    eventDate
    owner {
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
    }
    createdAt
    updatedAt
  }
}
    `;
export const useCreateBulletinMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    CreateBulletinMutation,
    TError,
    CreateBulletinMutationVariables,
    TContext
  >,
) =>
  useMutation<CreateBulletinMutation, TError, CreateBulletinMutationVariables, TContext>(
    (variables?: CreateBulletinMutationVariables) =>
      amplifyFetcher<CreateBulletinMutation, CreateBulletinMutationVariables>(
        CreateBulletinDocument,
        variables,
      )(),
    options,
  );
