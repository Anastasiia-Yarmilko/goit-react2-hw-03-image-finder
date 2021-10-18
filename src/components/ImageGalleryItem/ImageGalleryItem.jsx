import style from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ onImgClick, webformatURL }) => {
  return (
    <li className={style.GalleryItem}>
      <img
        src={webformatURL}
        alt="img"
        className={style.ImageGalleryItem}
        onClick={onImgClick}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  webFormatUrl: PropTypes.string,
  onImgClick: PropTypes.func,
};

export default ImageGalleryItem;
