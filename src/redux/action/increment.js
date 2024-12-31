import {
  INCREMENT_PRODUCT_COUNT,
  DECREMENT_PRODUCT_COUNT,
  REMOVE_PRODUCT,
} from './actionType';

// Action to increment the count of a product
export const incrementProductCount = id => ({
  type: INCREMENT_PRODUCT_COUNT,
  payload: id,
});

// Action to decrement the count of a product
export const decrementProductCount = id => ({
  type: DECREMENT_PRODUCT_COUNT,
  payload: id,
});

// Action to remove a product from the list
export const removeProduct = id => ({
  type: REMOVE_PRODUCT,
  payload: id,
});
