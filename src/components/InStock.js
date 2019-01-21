import React from 'react';

const InStock = props => {
  return (
    <div className='meta ui label green'>In Stock
      <span className='detail'> {' ' + props.stock}</span>
    </div>
  )
};

export default InStock;
