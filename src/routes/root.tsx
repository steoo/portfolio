import { Outlet, useLoaderData, useLocation } from 'react-router-dom';

import { Global } from '../../types/graphql';
import { QueryLoaderResult } from '../../types/loaders';
import {
  GlobalStyle,
  MenuNav,
  MenuItem,
  OutletContainer,
  RootContainer,
} from '../components/root/root.styled';

const Root = () => {
  const { data } = useLoaderData() as QueryLoaderResult<{
    global: Global;
  }>;
  const location = useLocation();

  const isActive = (path: string) =>
    location.pathname.replace('/', '') === path;

  return (
    <RootContainer>
      <GlobalStyle />
      <header>
        <MenuNav>
          <ol>
            <li>
              <MenuItem to="/about" $active={isActive('home')}>
                {data.global.about}
              </MenuItem>
            </li>
            <li>
              <MenuItem
                to="/selected-projects"
                $active={isActive('selected-projects')}
              >
                {data.global.selectedProjects}
              </MenuItem>
            </li>
            <li>
              <MenuItem to="/experience" $active={isActive('experience')}>
                {data.global.experience}
              </MenuItem>
            </li>
          </ol>
        </MenuNav>
      </header>
      <OutletContainer>
        <Outlet />
      </OutletContainer>
      <footer>
        <MenuNav>
          <ol>
            <li>
              <MenuItem to="/contacts" $active={isActive('contacts')}>
                {data.global.contacts}
              </MenuItem>
            </li>
            <li>
              <MenuItem to="/directory" $active={isActive('directory')}>
                {data.global.directory}
              </MenuItem>
            </li>
          </ol>
        </MenuNav>
      </footer>
    </RootContainer>
  );
};

export default Root;
