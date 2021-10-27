import { SearchUsersQuery, SearchGymsQueryVariables } from 'lib/api';
import { amplifyFetcher } from 'amplify/fetcher';
import { useQuery, UseQueryOptions } from 'react-query';

export const SearchUsersDocument = `
    query SearchUsers($filter: SearchableUserFilterInput, $limit: Int, $nextToken: String) {
        searchUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
            items {
                id
                address
                birthdate
                business
                city
                createdAt
                email
                gender
                name
                phone
                photo
                trainer
                updatedAt
            }
            nextToken
            scannedCount
            count
        }
    }
`;

export const useSearchUsersQuery = <TData = SearchUsersQuery, TError = unknown>(
  variables?: SearchGymsQueryVariables,
  options?: UseQueryOptions<SearchUsersQuery, TError, TData>,
) =>
  useQuery<SearchUsersQuery, TError, TData>(
    variables === undefined ? ['SearchUsers'] : ['SearchUsers', variables],
    amplifyFetcher<SearchUsersQuery, SearchGymsQueryVariables>(SearchUsersDocument, variables),
    options,
  );

useSearchUsersQuery.getKey = (variables?: SearchGymsQueryVariables) =>
  variables === undefined ? ['SearchUsers'] : ['SearchUsers', variables];

useSearchUsersQuery.fetcher = (variables?: SearchGymsQueryVariables) =>
  amplifyFetcher<SearchUsersQuery, SearchGymsQueryVariables>(SearchUsersDocument, variables);
