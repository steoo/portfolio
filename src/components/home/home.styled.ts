import styled from 'styled-components';

import { FlexColumnBetween, PageContainer } from '../global/global.styled';

export const HomeContainer = styled(PageContainer)`
  max-width: 940px;
  ${FlexColumnBetween};

  p {
    font-size: ${({ theme }) => theme.regularText};
  }
`;
