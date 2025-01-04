import styled from 'styled-components';

import { generateClampSizes } from '../../utils/styled-helpers';

export const Container = styled.div`
  max-width: 720px;

  padding-top: ${generateClampSizes(64, 128)};

  p {
    font-size: ${({ theme }) => theme.mediumText};
    text-transform: uppercase;
  }
`;
