import { gql } from '@apollo/client';

export const GET_CONTACTS = gql`
  query GetContacts {
    contactLinks {
      title
      url
    }
  }
`;
