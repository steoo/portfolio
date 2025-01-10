import { Link } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

import { FlexBetween, FlexColumnBetween } from '../global/global.styled';

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
`;

export const MenuNav = styled.nav`
  text-transform: uppercase;

  ol {
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    list-style: none;
    margin-bottom: ${({ theme }) => theme.rootVerticalMargin};
  }
  p {
    font-size: ${({ theme }) => theme.smallText};
    text-transform: lowercase;
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

export const Footer = styled.footer`
  ${FlexBetween};

  border-top: 4px solid ${({ theme }) => theme.black};
  margin-top: ${({ theme }) => theme.footerVerticalMargin};
  padding-top: 8px;

  p,
  a {
    font-size: ${({ theme }) => theme.smallText};
  }
  text-transform: lowercase;
`;
