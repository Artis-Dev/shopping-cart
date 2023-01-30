import { configureStore } from '@reduxjs/toolkit';
import products from './utils/products';

const initialState = {
  count: 0,
  products,
  cart: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

const store = configureStore({
  reducer,
  preloadedState: initialState,
});

export default store;
