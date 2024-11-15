import { configureStore } from '@reduxjs/toolkit';
import products from './utils/products';

const PAGE_SIZE_INITIAL_VALUE = 6;

const initialState = {
  products,
  cart: [],
  order: false,
  ui: {
    showNav: false,
    showFilter: false,
    showNotice: false,
  },
  filter: {
    categories: ['movies', 'television', 'games'],
    activeFilters: [],
    filteredProducts: [],
  },
  sort: {
    mode: 'featured', // featured/priceLow/PriceHigh
    currentPage: 1,
    pageSize: PAGE_SIZE_INITIAL_VALUE,
  },
  shipping: {
    selected: false,
    shippingMethods: [
      { id: 'free', title: 'Free shipping (parcel)', price: 0.0 },
      { id: 'local', title: 'Local pickup', price: 0.0 },
      { id: 'parcel', title: 'Parcel', price: 3.5 },
      { id: 'courier', title: 'Courier', price: 5.0 },
    ],
  },
};

const reducer = (state = initialState, action = {}) => {
  let itemIndex;
  switch (action.type) {
    case 'CART_ADD':
      itemIndex = state.cart.findIndex(
        (cartItem) => cartItem.id === action.item.id,
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
        cart: state.cart.filter((item) => item.id !== action.item.id),
      };

    case 'CART_INCREMENT':
      itemIndex = state.cart.findIndex((item) => item.id === action.item.id);
      if (itemIndex === -1) {
        return {
          ...state,
          cart: [...state.cart, { ...action.item, quantity: 1 }],
        };
      }
      return {
        ...state,
        cart: state.cart.map((item, index) => {
          if (index === itemIndex) {
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

    case 'CART_BUY':
      return {
        ...state,
        cart: [],
        order: action.item,
        ui: {
          ...state.ui,
          showNotice: false,
        },
      };

    case 'UI_SHOW_NOTICE':
      return {
        ...state,
        ui: {
          ...state.ui,
          showNotice: true,
        },
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
        sort: {
          ...state.sort,
          currentPage: 1,
        },
      };

    case 'FILTER_REMOVE':
      return {
        ...state,
        filter: {
          ...state.filter,
          activeFilters: state.filter.activeFilters.filter(
            (category) => category !== action.item,
          ),
        },
        sort: {
          ...state.sort,
          currentPage: 1,
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
        },
        sort: {
          ...state.sort,
          currentPage: 1,
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
          ...state.sort,
          mode: 'featured',
          currentPage: 1,
          pageSize: PAGE_SIZE_INITIAL_VALUE,
        },
      };

    case 'SORT_CHANGE_MODE':
      return {
        ...state,
        filter: {
          ...state.filter,
        },
        sort: {
          ...state.sort,
          mode: action.item,
          currentPage: 1,
        },
      };

    case 'SORT_CHANGE_PAGE_SIZE':
      return {
        ...state,
        sort: {
          ...state.sort,
          pageSize: action.item,
          currentPage: 1,
        },
      };

    case 'SORT_CHANGE_CURRENT_PAGE':
      return {
        ...state,
        sort: {
          ...state.sort,
          currentPage: action.item,
        },
      };

    case 'SORT_INCREMENT_CURRENT_PAGE':
      return {
        ...state,
        sort: {
          ...state.sort,
          currentPage: state.sort.currentPage + 1,
        },
      };

    case 'SORT_DECREMENT_CURRENT_PAGE':
      return {
        ...state,
        sort: {
          ...state.sort,
          currentPage: state.sort.currentPage - 1,
        },
      };

    case 'SHIPPING_CHANGE_METHOD':
      return {
        ...state,
        shipping: {
          ...state.shipping,
          selected: action.item,
        },
      };

    case 'SHIPPING_UNCHECK_METHOD':
      return {
        ...state,
        shipping: {
          ...state.shipping,
          selected: false,
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
