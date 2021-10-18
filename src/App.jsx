import React, { Component } from 'react';
import Searchbar from './components/Search/Search';
import PropTypes from 'prop-types';
import pixabayApi from './services/pixabay.api';
import Container from './components/Container/Container';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';

class App extends Component {
  state = {
    gallery: [],
    page: 1,
    largeImage: '',
    showModal: false,
    q: '',
    isLoading: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.q !== this.state.q) {
      this.fetchGallery();
    }
  }

  onChangeQuery = query => {
    this.setState({ q: query, page: 1, gallery: [], error: null });
  };

  fetchGallery = () => {
    const { q, page } = this.state;
    const options = { q, page };

    this.setState({ isLoading: true });
    pixabayApi
      .fetchPixabayImages(options)
      .then(({ data }) => {
        this.setState(prevState => ({
          gallery: [...prevState.gallery, ...data.hits],
          page: prevState.page + 1,
        }));
      })
      .catch(error => this.setState({ error }))
      .finally(() => {
        this.setState({ isLoading: false });
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      });
  };

  imgClick = largeImageURL => {
    this.setState({ largeImage: largeImageURL });

    this.toggleModal();
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { error, gallery, isLoading, showModal, largeImage } = this.state;
    const showLoadMoreBtn = gallery.length > 0 && !isLoading;
    return (
      <Container>
        {error && <h1>Try again!</h1>}
        <Searchbar onSubmit={this.onChangeQuery} />
        <ImageGallery showGallery={gallery} onImgClick={this.imgClick} />
        {isLoading && <Loader />}
        {showLoadMoreBtn && <Button onClick={this.fetchGallery} />}
        {showModal && (
          <Modal onClose={this.imgClick}>
            <img src={largeImage} alt="" />
          </Modal>
        )}
      </Container>
    );
  }
}

App.propTypes = {
  gallery: PropTypes.array,
  page: PropTypes.number,
  largeImage: PropTypes.string,
  showModal: PropTypes.bool,
  q: PropTypes.string,
  isLoading: PropTypes.bool,
  error: PropTypes.string,
};

export default App;
