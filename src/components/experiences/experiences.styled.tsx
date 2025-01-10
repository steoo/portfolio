import styled from 'styled-components';

export const ExperiencesContainer = styled.div`
  flex: 1;
`;

export const ExperienceCard = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  h2,
  h3 {
    font-size: ${({ theme }) => theme.regularText};
  }

  h3 {
    font-weight: 500;
  }
`;
