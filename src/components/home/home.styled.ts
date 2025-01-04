import styled from 'styled-components';

import { PageContainer } from '../global/global.styled';

export const Container = styled(PageContainer)`
  p {
    font-size: ${({ theme }) => theme.mediumText};
    text-transform: uppercase;
  }
`;
