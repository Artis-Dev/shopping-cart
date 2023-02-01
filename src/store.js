import { configureStore } from '@reduxjs/toolkit';
import products from './utils/products';

const initialState = {
  products,
  cart: [],
  showNav: false,
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

    case 'INCREMENT_CART_ITEM':
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === action.item.id) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        }),
      };

    case 'DECREMENT_CART_ITEM':
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === action.item.id && item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        }),
      };

    case 'REMOVE_CART_ITEM':
      return {
        ...state,
        cart: state.cart.filter((item) => {
          return item.id !== action.item.id;
        }),
      };

    case 'TOGGLE_NAV':
      return {
        ...state,
        showNav: !state.showNav,
      };

    case 'DISABLE_NAV':
      return {
        ...state,
        showNav: false,
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
