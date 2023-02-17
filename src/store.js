import { configureStore } from '@reduxjs/toolkit';
import products from './utils/products';

const initialState = {
  products,
  cart: [],
  showNav: false,
  showFilter: false,
  filter: {
    categories: ['movies', 'television', 'games'],
    activeFilters: [],
    filteredProducts: [],
  },
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
        cart: state.cart
          .map((item) => {
            if (item.id === action.item.id) {
              if (item.quantity > 1) {
                return { ...item, quantity: item.quantity - 1 };
              }
              return false;
            }
            return item;
          })
          .filter((item) => item),
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

    case 'TOGGLE_FILTER':
      return {
        ...state,
        showFilter: !state.showFilter,
      };

    case 'DISABLE_NAV':
      return {
        ...state,
        showNav: false,
      };

    case 'DISABLE_FILTER':
      return {
        ...state,
        showFilter: false,
      };

    case 'FILTER_ADD':
      if (state.filter.activeFilters.includes(action.item)) {
        return {
          ...state,
        };
      }
      return {
        ...state,
        filter: {
          ...state.filter,
          activeFilters: [...state.filter.activeFilters, action.item],
        },
      };

    case 'FILTER_REMOVE':
      return {
        ...state,
        filter: {
          ...state.filter,
          activeFilters: state.filter.activeFilters.filter(
            (category) => category !== action.item
          ),
        },
      };

    case 'FILTER_RESET':
      return {
        ...state,
        filter: {
          ...state.filter,
          activeFilters: [],
        },
      };

    case 'FILTER_UPDATE_PRODUCTS':
      return {
        ...state,
        filter: {
          ...state.filter,
          filteredProducts: action.item,
        },
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
