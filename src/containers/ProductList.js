import React, { Component } from 'react';
import { connect } from 'react-redux';
import faker from 'faker';

import { fetchProducts } from '../actions/index';
import ProductListItem from '../components/ProductListItem';

class ProductList extends Component {

  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    const productItems = this.props.products.map((product) => {
      return (
        <ProductListItem
          key={product._id}
          id={product._id}
          image={faker.image.technics()}
          title={product.title}
          price={product.price}
        />
      )
    });

    return (
      <div>
        <h2 className='ui container left aligned header'>Products</h2>
        <div className='product-list ui four column doubling grid container'>
          {productItems}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    products: state.products
  };
}

export default connect(mapStateToProps,{fetchProducts})(ProductList);
