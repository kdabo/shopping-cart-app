import React from 'react';
import { Link } from 'react-router-dom';
import ProductHeader from './ProductHeader';
import ProductPrice from './ProductPrice';
import Image from "./Image";

const ProductListItem = props => {
  return (
    <div className='column'>
      <div className='ui card'>
       <Image image={props.image}/>
        <div className='content'>
          <ProductHeader title={props.title}/>
          <ProductPrice price={props.price}/>
          <Link to={`/product/${props.id}`}>
            <div className='extra'>
              <div className='ui left basic floated secondary button'>View more</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
};

export default ProductListItem;
