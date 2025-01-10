import { Link } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

import { FlexColumnBetween } from '../global/global.styled';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.red};
    
    padding: ${({ theme }) => theme.rootVerticalMargin} ${({ theme }) => theme.rootHorizontalMargin};
    
    ${FlexColumnBetween};
  }
`;

export const RootContainer = styled.div`
  width: 100%;

  ${FlexColumnBetween};
`;

export const Header = styled.div`
  border-bottom: 4px solid ${({ theme }) => theme.black};

  padding-bottom: ${({ theme }) => theme.rootVerticalMargin};
`;

export const MenuNav = styled.nav`
  text-transform: uppercase;

  ol {
    list-style: none;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const MenuItem = styled(Link)<{ $active?: boolean }>`
  color: ${({ $active, theme }) => ($active ? theme.white : theme.black)};
  font-size: ${({ theme }) => theme.menuItem};
  text-decoration: none;
`;

export const OutletContainer = styled.main`
  display: flex;
  flex: 1;
`;
