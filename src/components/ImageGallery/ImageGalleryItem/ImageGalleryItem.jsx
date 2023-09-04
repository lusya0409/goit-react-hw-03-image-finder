import { ImageGalleryItemWrap } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  image: { webformatURL, largeImageURL },
  openModal,
}) => {
  return (
    <ImageGalleryItemWrap onClick={() => openModal(largeImageURL)}>
      <img src={webformatURL} alt={webformatURL} loading="lazy" />
    </ImageGalleryItemWrap>
  );
};
