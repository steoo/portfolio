import styled from 'styled-components';

import { generateClampSizes } from '../../utils/styled-helpers';
import { FlexBetween, FlexColumn } from '../global/global.styled';

export const ProjectsContainer = styled.div`
  /* ${FlexBetween}; */
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  flex: 1;

  /* max-height: 350px; */
  /* overflow-y: scroll; */
  column-gap: ${generateClampSizes(48, 96)};
`;

export const Project = styled.div`
  ${FlexColumn};

  font-family: 'OTNeueMontrealVariable';
  /* font-variation-settings: 'wght' 700; */

  max-width: 920px;
  width: 100%;

  transform-origin: top left;

  a {
    text-decoration: none;
  }

  h1,
  h2 {
    line-height: 1;
    word-wrap: break-word;
  }

  h1 {
    font-size: ${({ theme }) => theme.bigText};
    letter-spacing: 2px;
  }

  h2 {
    font-size: ${({ theme }) => theme.smallText};
    text-transform: lowercase;

    max-width: 720px;
  }
`;
