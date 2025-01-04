import styled from 'styled-components';

import { generateClampSizes } from '../../utils/styled-helpers';

export const ErrorContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;

  text-align: center;

  h3 {
    font-size: ${generateClampSizes(24, 48)};
  }

  p,
  a {
    font-size: ${generateClampSizes(16, 32)};
  }
`;
