import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import React, { Component } from 'react';
import api from 'api/api';
import toast, { Toaster } from 'react-hot-toast';
import { Searchbar } from './Searchbar/Searchbar';
import { Button } from './Button/Button';

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
  };
  //обнуляем интерфейс. Манипулируем стєйтом
  handleSubmit = evt => {
    evt.preventDefault();

    this.setState({
      query: evt.target.elements.query.value,
      images: [],
      page: 1,
    });
  };

  //HTTP request - делаем запрос //реагируе на манипляции стейта//єффект
  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      //HTTP request - делаем запрос
    }
  }

  //увеличиваем стр.
  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState + 1,
    }));
  };

  render() {
    return (
      <Layout>
        <Searchbar onSubmit={this.handleSubmit} />
        <form>
          <input type="text" name="query"></input>
          <button type="submit">Search</button>
        </form>
        {this.state.images.length > 0 && <ImageGallery>Gallery</ImageGallery>}
        <Button onHandleLoadMore={this.handleLoadMore} />
        <GlobalStyle />
        <Toaster position="top-right" reverseOrder={false} />
      </Layout>
    );
  }
}

// class App extends Component {
//   state = {
//     articles: [],
//     isLoading: false,
//     error: null,
//   };

// async componentDidMount() {
//     this.setState({ isLoading: true });

//     try {
//       const articles = api.fetchArticlesWithQuery("react");
//       this.setState({ articles });
//     } catch (error) {
//       this.setState({ error });
//     } finally {
//       this.setState({ isLoading: false });
//     }
//   }

//   render() {
//     const { articles, isLoading, error } = this.state;

//     return (
//       <div>
//         {error && <p>Whoops, something went wrong: {error.message}</p>}
//         {isLoading && <p>Loading...</p>}
//         {articles.length > 0 && <ArticleList articles={articles} />}
//       </div>
//     );
//   }
// }
