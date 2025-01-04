import { client } from '../global/apolloClient';

import { GET_HOME } from './home.fragment';

export async function homeLoader() {
  try {
    const { data, loading } = await client.query({ query: GET_HOME });

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
