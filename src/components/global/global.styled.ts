import styled, { css } from 'styled-components';

import { generateClampSizes } from '../../utils/styled-helpers';

export const FlexBetween = css`
  display: flex;
  justify-content: space-between;
`;

export const FlexColumn = css`
  display: flex;
  flex-direction: column;
`;

export const FlexColumnBetween = css`
  ${FlexBetween};
  flex-direction: column;
`;

export const PageContainer = styled.div`
  display: flex;
  flex: 1;

  padding-top: ${generateClampSizes(48, 96)};
`;
