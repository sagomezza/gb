import { amplifyFetcher } from 'amplify/fetcher';
import { ListBulletinsQuery, ListBulletinsQueryVariables } from 'lib/api';
import { useQuery, UseQueryOptions } from 'react-query';

export const ListBulletinsDocument = `
    query ListBulletins($filter: ModelBulletinFilterInput, $limit: Int, $nextToken: String) {
  listBulletins(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      description
      category
      photos
      bulletinOwnerId
      eventDate
      owner {
        name
      }
      createdAt
      updatedAt
    }
    nextToken
    scannedCount
    count
  }
}
    `;
export const useListBulletinsQuery = <TData = ListBulletinsQuery, TError = unknown>(
  variables?: ListBulletinsQueryVariables,
  options?: UseQueryOptions<ListBulletinsQuery, TError, TData>,
) =>
  useQuery<ListBulletinsQuery, TError, TData>(
    variables === undefined ? ['ListBulletins'] : ['ListBulletins', variables],
    amplifyFetcher<ListBulletinsQuery, ListBulletinsQueryVariables>(
      ListBulletinsDocument,
      variables,
    ),
    options,
  );
useListBulletinsQuery.getKey = (variables?: ListBulletinsQueryVariables) =>
  variables === undefined ? ['ListBulletins'] : ['ListBulletins', variables];

useListBulletinsQuery.fetcher = (variables?: ListBulletinsQueryVariables) =>
  amplifyFetcher<ListBulletinsQuery, ListBulletinsQueryVariables>(ListBulletinsDocument, variables);
