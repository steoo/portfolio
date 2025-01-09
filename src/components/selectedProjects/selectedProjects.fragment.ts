import { gql } from '@apollo/client';

export const GET_PROJECTS = gql`
  query GetProjects {
    projects {
      metadata {
        description
        id
        link
        title
      }
    }
  }
`;
