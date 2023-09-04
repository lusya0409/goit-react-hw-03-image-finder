import styled from 'styled-components';

export const ImageGalleryItemWrap = styled.li`
  width: 100%;
  height: 260px;
  overflow: hidden;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
  img {
    min-height: 100%;
    width: 100%;
  }
`;
