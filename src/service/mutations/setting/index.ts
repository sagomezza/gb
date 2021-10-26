import { UpdateSettingMutation, UpdateSettingMutationVariables } from 'lib/api';
import { amplifyFetcher } from 'amplify/fetcher';
import { useMutation, UseMutationOptions } from 'react-query';

export const UpdateSettingDocument = `
    mutation UpdateSetting($input: UpdateSettingInput!, $condition: ModelSettingConditionInput) {
  updateSetting(input: $input, condition: $condition) {
    id
    categories
    radius
    icon
    settingOwnerId
    createdAt
    updatedAt
  }
}
    `;
export const useUpdateSettingMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    UpdateSettingMutation,
    TError,
    UpdateSettingMutationVariables,
    TContext
  >,
) =>
  useMutation<UpdateSettingMutation, TError, UpdateSettingMutationVariables, TContext>(
    (variables?: UpdateSettingMutationVariables) =>
      amplifyFetcher<UpdateSettingMutation, UpdateSettingMutationVariables>(
        UpdateSettingDocument,
        variables,
      )(),
    options,
  );
