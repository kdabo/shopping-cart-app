import React from 'react';

const ProductHeader = props => {
  const title = props.title.substr(0,25);

  return (
    <h3 className='header'>{title}</h3>
  )
};

export default ProductHeader;
