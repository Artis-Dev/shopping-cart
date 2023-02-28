import { configureStore } from '@reduxjs/toolkit';
import products from './utils/products';

const initialState = {
  products,
  cart: [],
  ui: {
    showNav: false,
    showFilter: false,
  },
  filter: {
    categories: ['movies', 'television', 'games'],
    activeFilters: [],
    filteredProducts: [],
  },
  sort: {
    mode: 'featured', // featured/priceLow/PriceHigh
  },
};

const reducer = (state = initialState, action = {}) => {
  let itemIndex;
  switch (action.type) {
    case 'CART_ADD':
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

    case 'CART_REMOVE':
      return {
        ...state,
        cart: state.cart.filter((item) => {
          return item.id !== action.item.id;
        }),
      };

    case 'CART_INCREMENT':
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === action.item.id) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        }),
      };

    case 'CART_DECREMENT':
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

    case 'UI_TOGGLE_NAV':
      return {
        ...state,
        ui: {
          ...state.ui,
          showNav: !state.ui.showNav,
        },
      };

    case 'UI_TOGGLE_FILTER':
      return {
        ...state,
        ui: {
          ...state.ui,
          showFilter: !state.ui.showFilter,
        },
      };

    case 'UI_DISABLE_NAV':
      return {
        ...state,
        ui: {
          ...state.ui,
          showNav: false,
        },
      };

    case 'UI_DISABLE_FILTER':
      return {
        ...state,
        ui: {
          ...state.ui,
          showFilter: false,
        },
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

    case 'FILTER_UPDATE_PRODUCTS':
      return {
        ...state,
        filter: {
          ...state.filter,
          filteredProducts: action.item,
        },
      };

    case 'FILTER_RESET':
      return {
        ...state,
        filter: {
          ...state.filter,
          activeFilters: [],
          sort: 'featured',
        },
      };

    case 'RESET':
      return {
        ...state,
        filter: {
          ...state.filter,
          activeFilters: [],
        },
        sort: {
          mode: 'featured',
        },
      };

    case 'SORT_CHANGE_MODE':
      return {
        ...state,
        filter: {
          ...state.filter,
        },
        sort: {
          mode: action.item,
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
