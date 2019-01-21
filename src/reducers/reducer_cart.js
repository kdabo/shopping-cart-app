import { FETCH_CART, ADD_TO_CART, REMOVE_FROM_CART, CHECKOUT } from '../actions/index';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_CART:
      return action.payload;
    case ADD_TO_CART:
      return action.payload;
    case REMOVE_FROM_CART:
      return action.payload;
    case CHECKOUT:
      return [];
    default:
      return state;
  }
}
