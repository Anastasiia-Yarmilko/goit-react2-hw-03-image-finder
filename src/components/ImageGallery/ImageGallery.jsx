import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ showGallery, onImgClick }) => {
  return (
    <ul className={styles.Gallery}>
      {showGallery.map(({ id, webformatURL, largeImageURL }) => {
        const handleItemClick = () => onImgClick(largeImageURL);
        return (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
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
