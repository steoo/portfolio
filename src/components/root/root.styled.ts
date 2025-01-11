import { Link } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

import { FlexBetween, FlexColumnBetween } from '../global/global.styled';

interface GradientProps {
  $x: number;
  $y: number;
}

export const GradientContainer = styled.div<GradientProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: radial-gradient(
    circle 50vh at ${(props) => props.$x}% ${(props) => props.$y}%,
    ${({ theme }) => `${theme.red}DD`} 0%,
    ${({ theme }) => theme.red} 100%
  );
  transition: background 0.3s ease;
`;

export const GlobalStyle = createGlobalStyle`
  body {
    
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

  @media (max-width: ${(props) => props.theme.laptop}) {
    li:nth-child(3) {
      text-align: right;
    }
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
