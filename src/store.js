import { configureStore } from '@reduxjs/toolkit';
import products from './utils/products';

const initialState = {
  products,
  cart: [],
};

const reducer = (state = initialState, action = {}) => {
  let itemIndex;
  switch (action.type) {
    case 'ADD_TO_CART':
      itemIndex = state.cart.findIndex(
        (cartItem) => cartItem.id === action.item.id
      );
      if (itemIndex !== -1) {
        return {
          ...state,
          cart: state.cart.map((item) => {
            if (item.id === action.item.id) {
              return { ...item, quantity: item.quantity + 1 };
            }
            return item;
          }),
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.item, quantity: 1 }],
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
