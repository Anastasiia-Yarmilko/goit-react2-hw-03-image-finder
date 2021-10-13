import './App.css';
import React, { Component } from 'react';
import Searchbar from './components/Search/Search';
import PropTypes from 'prop-types';
import pixabyApi from './services/pixaby.api';
import Container from './components/Container/Container';
import ImageGallery from './components/ImageGallery/ImageGallery';

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

  componentDidUpdate(prevState) {
    if (prevState.q !== this.state.q) {
      this.fetchGallery();
    }
  }

  onChangeQuery = query => {
    this.state({ q: query, page: 1, gallery: [], error: null });
  };

  imgClick = largeImgUrl => {
    this.setState({ largeImage: largeImgUrl });
  };

  render() {
    const { error, gallery } = this.state;
    return (
      <Container>
        {error && <h1>Try again!</h1>}
        <Searchbar onSubmit={this.onChangeQuery} />
        <ImageGallery showGallery={gallery} onImgClick={this.imgClick} />
      </Container>
    );
  }
}

export default App;
