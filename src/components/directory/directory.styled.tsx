import styled from 'styled-components';

import { FlexColumn } from '../global/global.styled';

export const DirectoryContainer = styled.div`
  ${FlexColumn};

  row-gap: 20px;

  h1 {
    font-size: ${({ theme }) => theme.tinyText};
    color: ${({ theme }) => theme.white};
  }
`;

export const DirectoryItem = styled.div`
  color: ${({ theme }) => theme.black};

  a {
    font-size: ${({ theme }) => theme.regularText};
    text-decoration: none;
  }

  p {
    font-size: ${({ theme }) => theme.smallText};
    font-weight: 500;

    max-width: 400px;

    text-transform: none;
  }
`;
