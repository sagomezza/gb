import { ListCategorysQuery, ListCategorysQueryVariables } from 'lib/api';
import { amplifyFetcher } from 'amplify/fetcher';
import { useQuery, UseQueryOptions } from 'react-query';

export const ListCategorysDocument = `
    query ListCategorys($filter: ModelCategoryFilterInput, $limit: Int, $nextToken: String) {
  listCategorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      createdAt
      updatedAt
    }
    nextToken
  }
}
    `;
export const useListCategorysQuery = <TData = ListCategorysQuery, TError = unknown>(
  variables?: ListCategorysQueryVariables,
  options?: UseQueryOptions<ListCategorysQuery, TError, TData>,
) =>
  useQuery<ListCategorysQuery, TError, TData>(
    variables === undefined ? ['ListCategorys'] : ['ListCategorys', variables],
    amplifyFetcher<ListCategorysQuery, ListCategorysQueryVariables>(
      ListCategorysDocument,
      variables,
    ),
    options,
  );
useListCategorysQuery.getKey = (variables?: ListCategorysQueryVariables) =>
  variables === undefined ? ['ListCategorys'] : ['ListCategorys', variables];

useListCategorysQuery.fetcher = (variables?: ListCategorysQueryVariables) =>
  amplifyFetcher<ListCategorysQuery, ListCategorysQueryVariables>(ListCategorysDocument, variables);
