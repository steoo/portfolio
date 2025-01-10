import { gql } from '@apollo/client';

export const GET_DIRECTORY = gql`
  query GetDirectory {
    directoryPage {
      description
    }
    directoryEntries {
      documentId
      metadata {
        title
        description
        link
      }
    }
  }
`;
