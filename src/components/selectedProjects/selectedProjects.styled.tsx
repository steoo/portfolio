import styled from 'styled-components';

import { generateClampSizes } from '../../utils/styled-helpers';

export const ProjectsContainer = styled.div`
  flex: 1;

  list-style-position: inside;

  display: grid;
  grid-template-columns: repeat(1, 1fr);
  row-gap: ${generateClampSizes(16, 32)};

  @media (min-width: ${(props) => props.theme.laptop}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Project = styled.div`
  display: list-item;
  position: relative;

  a {
    text-decoration: none;
  }

  h1,
  h2 {
    line-height: 1;
    word-wrap: break-word;
  }

  h1 {
    font-size: ${({ theme }) => theme.mediumText};
    letter-spacing: 2px;
  }

  h2 {
    margin-top: 8px;
    font-size: ${({ theme }) => theme.smallText};
    text-transform: none;

    max-width: ${generateClampSizes(180, 400)};
  }

  img {
    position: absolute;
    top: 5px;
    left: 15px;
  }
`;
