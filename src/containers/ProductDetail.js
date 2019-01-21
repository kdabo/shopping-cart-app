import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import faker from 'faker';

import {fetchProducts} from '../actions/index';
import ProductHeader from '../components/ProductHeader';
import ProductDescription from '../components/ProductDescription';
import ProductPrice from '../components/ProductPrice';
import Image from '../components/Image';
import Cart from './Cart';

class ProductDetail extends Component {

  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    const {product} = this.props;

    if (!product) {
      return <div>Loading... </div>
    }

    return (
      <div className='container ui'>
        <Link className='ui labeled icon button' to='/'>
          <i className='left arrow icon'/> Back to Products
        </Link>

        <div className='ui grid margin-top'>
          <div className='right aligned four wide column'>
            <Image image={faker.image.technics()}/>
          </div>
          <div className='left aligned eight wide column'>
            <ProductHeader title={product.title.toUpperCase()}/>
            <ProductPrice price={product.price}/>
            <Cart product={product}
                  viewMode='full'/>
            <ProductDescription text={product.description}/>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  if (!state.products) {
    return {}
  }

  let product = state.products.find(product => {
    if (product._id === ownProps.match.params.id) {
      return product;
    } else {
      return null;
    }
  });
  return {product};
}

export default connect(mapStateToProps, {fetchProducts})(ProductDetail);
