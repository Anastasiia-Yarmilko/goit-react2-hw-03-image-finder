import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';

const ImageGallery = ({ showGallery, onImgClick }) => {
  return (
    <ul className="Gallery">
      {showGallery.map(({ id, webFormatUrl, largeImageUrl }) => {
        const handleItemClick = () => onImgClick(largeImageUrl);
        return (
          <ImageGalleryItem
            key={id}
            webformatURL={webFormatUrl}
            onImgClick={handleItemClick}
          />
        );
      })}
    </ul>
  );
};

ImageGallery.propTypes = {
  showGallery: PropTypes.array,
  onImgClick: PropTypes.func,
};

export default ImageGallery;
