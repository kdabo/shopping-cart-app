import React from 'react';

const Image = (props) => {
  return (
    <div className='ui large image'>
      <img src={props.image} alt='product'/>
    </div>
  )
};

export default Image;
