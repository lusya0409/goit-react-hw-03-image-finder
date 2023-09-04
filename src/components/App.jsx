import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import React, { Component } from 'react';
import { fetchArticlesWithQuery } from 'api/api';
import toast, { Toaster } from 'react-hot-toast';
import { Searchbar } from './Searchbar/Searchbar';
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Modal } from './Modal/Modal';
import { Loader } from './Loader/Loader';

export class App extends Component {
  state = {
    query: 'dog',
    loading: false,
    error: false,
    images: [],
    page: 1,
    loadMore: false,
    uniqueId: 0,
    modalIsOpen: false,
    largeImageURL: '',
  };

  handleSubmit = evt => {
    evt.preventDefault();

    this.setState({
      query: evt.target.elements.query.value,
      images: [],
      page: 1,
      loadMore: false,
      uniqueId: Date.now(),
    });
  };

  async componentDidMount() {
    const savedSearchQuery = localStorage.getItem('search-query');
    if (savedSearchQuery !== null) {
      this.setState({
        query: savedSearchQuery,
      });
    }
    if (!this.state.query) return;
  }

  async componentDidUpdate(prevProps, prevState) {
    const { query, page, uniqueId } = this.state;

    if (
      prevState.query !== query ||
      prevState.page !== page ||
      prevState.uniqueId !== uniqueId
    ) {
      try {
        this.setState({ loading: true });
        const searchQuery = await fetchArticlesWithQuery(query, page);
        if (page > 1) {
          if (!searchQuery.length) {
            this.setState({
              loadMore: false,
            });
            toast.error('No more images!');
            return;
          }
          this.setState({ images: [...prevState.images, ...searchQuery] });
        } else {
          if (!searchQuery.length) {
            toast.error('Nothing found!');
            return;
          }
          this.setState({ images: searchQuery });
          this.setState({ loadMore: true });
        }
      } catch (error) {
        this.setState({ error: true });
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };
  openModal = largeImageURL => {
    this.closeModal();
    this.setState({ largeImageURL, modalIsOpen: true });
    document.addEventListener('keydown', this.onEscKeyPress);
  };
  closeModal = () => {
    this.setState({ modalIsOpen: false });
    document.removeEventListener('keydown', this.onEscKeyPress);
  };
  onEscKeyPress = evt => {
    const ESC_KEY_CODE = 'Escape';
    if (evt.code === ESC_KEY_CODE) {
      this.closeModal();
    }
  };

  render() {
    const { images, loadMore, modalIsOpen, largeImageURL, loading } =
      this.state;
    return (
      <Layout>
        <Searchbar onSubmit={this.handleSubmit} />
        {images.length > 0 && (
          <ImageGallery images={images} openModal={this.openModal} />
        )}
        {modalIsOpen && (
          <Modal largeImageURL={largeImageURL} closeModal={this.closeModal} />
        )}
        {loadMore && <Button onHandleLoadMore={this.handleLoadMore} />}
        {loading && <Loader />}
        <GlobalStyle />
        <Toaster position="top-right" reverseOrder={false} />
      </Layout>
    );
  }
}
