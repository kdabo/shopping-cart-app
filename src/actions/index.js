import axios from 'axios';

const API_URL = 'https://next.json-generator.com/api/json/get/4kiDK7gxZ';
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const FETCH_CART = 'FETCH_CART';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const CHECKOUT = 'CHECKOUT';

Storage.prototype.setObj = function(key, obj) {
  return this.setItem(key, JSON.stringify(obj))
};

Storage.prototype.getObj = function(key) {
  return JSON.parse(this.getItem(key))
};

export function fetchProducts() {
  const request = axios.get(API_URL);

  return {
    type: FETCH_PRODUCTS,
    payload: request
  }
}

export function fetchCart() {
  let cart = localStorage.getObj('cart');

  return {
    type: FETCH_CART,
    payload: cart || []
  }
}

export function addToCart(product) {
  let cart = localStorage.getObj('cart');

  if(!cart || !cart.push){
    cart = [];
  }

  cart.push(product);
  localStorage.setObj('cart', cart);

  return {
    type: ADD_TO_CART,
    payload: cart
  }
}

export function removeFromCart(product) {
  let cart = localStorage.getObj('cart');

  if (cart) {
    let found = false;
    for(let i = 0; i < cart.length; i++) {
     if(!found && cart[i]._id === product._id) {
       found = true;
       cart.splice(i, 1)
     }
    }
  }

  localStorage.setObj('cart', cart || []);

  return {
    type: REMOVE_FROM_CART,
    payload: cart || []
  }
}

export function checkout() {
  localStorage.setObj('cart', []);

  return {
    type: CHECKOUT,
    payload: []
  }
}
