import { gql } from '@apollo/client';

export const GET_HOME = gql`
  query GetHome {
    aboutPage {
      richDescription
    }
  }
`;
