import { ImageGalleryList } from './ImageGallery.styled';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images, openModal }) => {
  return (
    <ImageGalleryList>
      {images.map(item => {
        return (
          <ImageGalleryItem key={item.id} image={item} openModal={openModal} />
        );
      })}
    </ImageGalleryList>
  );
};
