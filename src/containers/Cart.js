import React, {Component} from 'react';
import {connect} from 'react-redux';
import InStock from '../components/InStock';
import {fetchCart, removeFromCart, checkout, addToCart} from '../actions';

class Cart extends Component {
  constructor() {
    super();

    this.removeFromCart = this.removeFromCart.bind(this);
    this.checkout = this.checkout.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  componentDidMount() {
    this.props.fetchCart();
  }

  removeFromCart(event) {
    event.preventDefault();
    this.props.removeFromCart({_id: event.target.name});
  }

  checkout(event) {
    event.preventDefault();
    this.props.checkout();
    alert('You have successfully checked out!');
  }

  addToCart(event) {
    event.preventDefault();
    if (this.inStock === 0) {
      alert("Stock is empty");
      return
    }
    this.props.addToCart(this.props.product);
  }

  render() {
    const {cart, product, viewMode} = this.props;

    this.inStock = product && product.stock && product.stock.remaining;

    let cartItem = cart && cart.map && cart.map((cartItem, index) => {
      if (product && product._id === cartItem._id) {
        this.inStock = this.inStock - 1;
      }

      let content = '';

      if (viewMode === 'full') {
        content =
          <div className="margin-top-bottom">
            <button className='ui label'
                    key={cartItem._id + '_button'}
                    name={cartItem._id}
                    onClick={this.removeFromCart}> {cartItem.title}
              <i className="delete icon"/>
            </button>
          </div>
      }

      return (
        <div key={cartItem._id + index + '_field'}>
          {content}
        </div>
      )
    });

    let header = '';
    let footer = '';

    if (viewMode === 'header') {
      cartItem =
        <div className='ui compact menu' onClick={this.checkout}>
          <div className='item'>
            <i className='shopeping cart icon'/> CHECKOUT
            <div className='ui black label'>{cart.length}</div>
          </div>
        </div>
    } else if (viewMode === 'full') {
      header = <InStock stock={this.inStock}/>
      footer = <div>
        <button onClick={this.addToCart} className='ui red basic button margin-top'> Add to Cart</button>
      </div>
    }

    return (
      <div>
        {header}
        {cartItem}
        {footer}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps, {fetchCart, removeFromCart, checkout, addToCart})(Cart);
