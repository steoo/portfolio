import { gql } from '@apollo/client';

export const GET_DIRECTORY = gql`
  query GetDirectory {
    directoryPage {
      description
      send
      sendLink
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
