import { DocumentNode } from 'graphql';

import { client } from '../global/apolloClient';

export function queryLoader<T>(
  query: DocumentNode,
  variables?: Record<string, unknown>
) {
  return async () => {
    try {
      const { data, loading } = await client.query<T>({
        query,
        variables,
      });

      return {
        loading,
        data: data ?? null,
      };
    } catch (error) {
      console.error('Error in queryLoader:', error);

      return {
        loading: false,
        error: (error as Error).message,
        data: null,
      };
    }
  };
}
