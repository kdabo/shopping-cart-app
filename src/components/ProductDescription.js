import React from 'react';

const ProductDescription = props => {
  return (
    <div className='margin-top'>
      <h4 className='ui left aligned header'>Product Description</h4>
      <div className='description'>{props.text}</div>
    </div>
  )
};

export default ProductDescription;
