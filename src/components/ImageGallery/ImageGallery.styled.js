import styled from 'styled-components';

export const ImageGalleryList = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));

  grid-gap: ${({ theme }) => theme.spasing(2)};
  justify-content: center;
  padding: 0;
  padding-top: ${({ theme }) => theme.spasing(2)};
  list-style: none;
  margin: 0 auto;
`;
