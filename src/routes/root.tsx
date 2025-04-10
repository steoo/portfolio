import { Outlet } from 'react-router-dom';

import { DynamicGradient } from '../components/root/dynamicGradient';
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
      <DynamicGradient />
      <GlobalStyle />
      <Menu />
      <OutletContainer>
        <Outlet />
      </OutletContainer>
      <Footer>
        <MenuItem to="/home">stefano imparato</MenuItem>
        <a href="https://github.com/steoo/portfolio" target="_blank">
          you can find thecode on Github
        </a>
      </Footer>
    </RootContainer>
  );
};

export default Root;
