import { GetUserQuery, GetUserQueryVariables } from 'lib/api';
import { amplifyFetcher } from 'amplify/fetcher';
import { useQuery, UseQueryOptions } from 'react-query';

export const GetUserDocument = `
    query GetUser($id: ID!) {
  getUser(id: $id)  { 
    email
    setting {
      categories 
      id
      radius
    }
  }
    }
`;

export const useGetUserQuery = <TData = GetUserQuery, TError = unknown>(
  variables: GetUserQueryVariables,
  options?: UseQueryOptions<GetUserQuery, TError, TData>,
) =>
  useQuery<GetUserQuery, TError, TData>(
    ['GetUser', variables],
    amplifyFetcher<GetUserQuery, GetUserQueryVariables>(GetUserDocument, variables),
    options,
  );

useGetUserQuery.getKey = (variables?: GetUserQueryVariables) => ['GetUser', variables];

useGetUserQuery.fetcher = (variables?: GetUserQueryVariables) =>
  amplifyFetcher<GetUserQuery, GetUserQueryVariables>(GetUserDocument, variables);
