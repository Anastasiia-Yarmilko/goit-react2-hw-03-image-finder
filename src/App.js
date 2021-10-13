import './App.css';
import React, { Component } from 'react';
import Searchbar from './components/Search/Search'
import PropTypes from 'prop-types';
import pixabyApi from './services/pixaby.api';
import Container from './components/Container/Container';

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

  render(){
    const {error} = this.state;
    return(
      <Container>
        {error && <h1>Try again!</h1> }
        <Searchbar onSubmit={this.onChangeQuery}/>

      </Container>

    )
  };
}

export default App;
