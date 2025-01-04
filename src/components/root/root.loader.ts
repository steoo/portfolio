import { client } from '../global/apolloClient';

import { GET_ROOT } from './root.fragment';

export async function rootLoader() {
  try {
    const { data, loading } = await client.query({ query: GET_ROOT });

    return {
      loading,
      data,
    };
  } catch (error) {
    console.error('Error in loader:', error);

    // Return error information to handle in your components
    return {
      loading: false,
      error: (error as Error).message,
      data: null,
    };
  }
}
