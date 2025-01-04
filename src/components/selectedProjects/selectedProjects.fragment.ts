import { gql } from '@apollo/client';

export const GET_PROJECTS = gql`
  query GetProjects {
    project {
      metadata {
        title
        link
        description
      }
    }
  }
`;
