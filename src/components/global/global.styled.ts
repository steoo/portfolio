import styled, { css } from 'styled-components';

import { generateClampSizes } from '../../utils/styled-helpers';

export const FlexColumnBetween = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const PageContainer = styled.div`
  max-width: 720px;

  padding-top: ${generateClampSizes(64, 128)};
`;
