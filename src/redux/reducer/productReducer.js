// src/redux/reducers/productReducer.js
import {
  INCREMENT_PRODUCT_COUNT,
  DECREMENT_PRODUCT_COUNT,
  REMOVE_PRODUCT,
} from '../action/actionType';

const initialState = {
  products: [
    {productName: 'abc', id: 1, count: 1},
    {productName: 'xyz', id: 2, count: 1},
    // Add more products as needed
  ],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_PRODUCT_COUNT:
      return {
        ...state,
        products: state.products.map(product =>
          product.id === action.payload
            ? {...product, count: product.count + 1}
            : product,
        ),
      };
    case DECREMENT_PRODUCT_COUNT:
      return {
        ...state,
        products: state.products.map(product =>
          product.id === action.payload
            ? {...product, count: Math.max(product.count - 1, 0)}
            : product,
        ),
      };
    case REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          product => product.id !== action.payload,
        ),
      };
    default:
      return state;
  }
};

export default productReducer;
