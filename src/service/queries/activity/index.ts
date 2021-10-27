import { amplifyFetcher } from 'amplify/fetcher';
import { ListActivitysQuery, ListActivitysQueryVariables } from 'lib/api';
import { useQuery, UseQueryOptions } from 'react-query';

export const ListActivitiesDocument = `
    query ListActivitys($filter: ModelActivityFilterInput, $limit: Int, $nextToken: String) {
      listActivitys(filter: $filter, limit: $limit, nextToken: $nextToken) {
            items {
                id
                title
                description
                address
                activityOwnerId
                activityDate
                available
                invitePushSent
                location
                pictures
                startAt
                status
                endsAt
                updatedAt
                createdAt
            }
            nextToken
        }
    }
`;

export const useListActivitysQuery = <TData = ListActivitysQuery, TError = unknown>(
  variables?: ListActivitysQueryVariables,
  options?: UseQueryOptions<ListActivitysQuery, TError, TData>,
) =>
  useQuery<ListActivitysQuery, TError, TData>(
    variables === undefined ? ['ListActivitys'] : ['ListActivitys', variables],
    amplifyFetcher<ListActivitysQuery, ListActivitysQueryVariables>(
      ListActivitiesDocument,
      variables,
    ),
    options,
  );

useListActivitysQuery.getKey = (variables?: ListActivitysQueryVariables) =>
  variables === undefined ? ['ListActivitys'] : ['ListActivitys', variables];

useListActivitysQuery.fetcher = (variables?: ListActivitysQueryVariables) =>
  amplifyFetcher<ListActivitysQuery, ListActivitysQueryVariables>(
    ListActivitiesDocument,
    variables,
  );
