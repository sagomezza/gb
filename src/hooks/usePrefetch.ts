import { useQueryClient } from 'react-query';
import { ITEMS_PER_FETCH, STALE_TIME } from 'utils/constants';
import { useFavoriteByOwnerIdQuery, useListCategoriesQuery } from 'lib/api';
import { friendByOwnerIdQuery, getUserQuery, listSpotsQuery } from 'service/queries';

export const usePrefetch = () => {
  const queryClient = useQueryClient();

  const prefetchFavorites = async (userId, staleTime = STALE_TIME, limit = ITEMS_PER_FETCH) => {
    const variables = { favoriteOwnerId: userId, limit };

    await queryClient.prefetchQuery(
      useFavoriteByOwnerIdQuery.getKey(variables),
      useFavoriteByOwnerIdQuery.fetcher(variables),
      {
        staleTime,
      },
    );
  };

  const prefetchUser = async (userId, staleTime = STALE_TIME) => {
    const variables = { id: userId };

    await queryClient.prefetchQuery(
      getUserQuery.getKey(variables),
      getUserQuery.fetcher(variables),
      { staleTime },
    );
  };

  const prefetchSpotTypes = async (staleTime = STALE_TIME) => {
    await queryClient.prefetchQuery(
      useListCategoriesQuery.getKey(),
      useListCategoriesQuery.fetcher(),
      { staleTime },
    );
  };

  const prefetchSpots = async (searchValue = '', staleTime = STALE_TIME) => {
    const variables = { filter: { name: { contains: searchValue } } };

    await queryClient.prefetchQuery(
      listSpotsQuery.getKey(variables),
      listSpotsQuery.fetcher(variables),
      {
        staleTime,
      },
    );
  };

  const prefetchFriends = async (userId, staleTime = STALE_TIME, limit = ITEMS_PER_FETCH) => {
    const variables = { friendOwnerId: userId, limit };

    await queryClient.prefetchQuery(
      friendByOwnerIdQuery.getKey(variables),
      friendByOwnerIdQuery.fetcher(variables),
      {
        staleTime,
      },
    );
  };

  // const prefetchEvents = async (staleTime = STALE_TIME) => {};

  const prefetch = async (userId) => {
    await prefetchFavorites(userId);
    await prefetchSpotTypes();
    await prefetchUser(userId);
    await prefetchSpots();
    await prefetchFriends(userId);
  };

  return {
    prefetch,
    prefetchFavorites,
    prefetchFriends,
    prefetchUser,
    prefetchSpots,
    prefetchSpotTypes,
  };
};
