import { gql } from '@apollo/client';

export const GET_EXPERIENCES = gql`
  query GetExperiences {
    global {
      experience
    }
    experiences {
      documentId
      title
      year
    }
  }
`;
