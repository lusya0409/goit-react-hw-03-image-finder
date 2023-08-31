import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import React, { Component } from 'react';
import { Feedback } from './Feedback/Feedback';

export class App extends Component {
  render() {
    return (
      <Layout>
        <Feedback />
        <GlobalStyle />
      </Layout>
    );
  }
}
