import styled from 'styled-components';

export const ContactLinksContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(auto-fill, 50px);

  @media (min-width: ${(props) => props.theme.laptop}) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 100px);
  }
`;

export const ContactLink = styled.a`
  color: ${({ theme }) => theme.black};
  font-size: ${({ theme }) => theme.regularText};
  text-decoration: none;
  text-transform: uppercase;

  @media (min-width: ${(props) => props.theme.laptop}) {
    &:first-child {
      grid-column: 1;
      grid-row: 1;
    }

    &:not(:first-child) {
      grid-row: 2;
    }
  }
`;
