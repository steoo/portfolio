import { useLoaderData, useLocation } from 'react-router-dom';

import { Global } from '../../../types/graphql';
import { QueryLoaderResult } from '../../../types/loaders';

import { MenuItem, MenuNav } from './root.styled';
import { Header } from './root.styled';

const Menu = () => {
  const { data } = useLoaderData() as QueryLoaderResult<{
    global: Global;
  }>;

  const location = useLocation();

  const isActive = (path: string) =>
    location.pathname.replace('/', '') === path;

  return (
    <Header>
      <MenuNav>
        <ol>
          <li>
            <MenuItem to="/home" $active={isActive('home')}>
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
            <MenuItem to="/experiences" $active={isActive('experiences')}>
              {data.global.experience}
            </MenuItem>
          </li>
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
    </Header>
  );
};

export default Menu;
