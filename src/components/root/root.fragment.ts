import { gql } from '@apollo/client';

export const GET_ROOT = gql`
  query GetRoot {
    global {
      about
      contacts
      directory
      experience
      selectedProjects
    }
  }
`;
