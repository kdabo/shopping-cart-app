import React from 'react';
import Cart from '../containers/Cart';

const Header = () => {
  return  (
    <div className='header-container dividing'>
      <div className="ui small image">
        <img src="/logo.svg" alt="lightspeed-logo"/>
      </div>
      <Cart viewMode='header'/>
    </div>
  )
};

export default Header;
