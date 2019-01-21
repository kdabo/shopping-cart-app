import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import ProductList from '../containers/ProductList';
import ProductDetail from '../containers/ProductDetail';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <BrowserRouter>
          <div>
            <Route path='/' exact component={ProductList} />
            <Route path='/product/:id' component={ProductDetail} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
