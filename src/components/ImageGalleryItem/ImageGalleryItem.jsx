import style from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ onImgClick, webFormatUrl }) => {
  return (
    <li className={style.GalleryItem}>
      <img
        src={webFormatUrl}
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
