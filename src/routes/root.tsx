import { Outlet } from 'react-router-dom';

import Menu from '../components/root/menu';
import {
  GlobalStyle,
  MenuItem,
  OutletContainer,
  RootContainer,
  Footer,
} from '../components/root/root.styled';

const Root = () => {
  return (
    <RootContainer>
      <GlobalStyle />
      <Menu />
      <OutletContainer>
        <Outlet />
      </OutletContainer>
      <Footer>
        <MenuItem to="/home">stefano imparato</MenuItem>
        <a href="https://github.com/steoo/portfolio" target="_blank">
          code on Github
        </a>
      </Footer>
    </RootContainer>
  );
};

export default Root;
