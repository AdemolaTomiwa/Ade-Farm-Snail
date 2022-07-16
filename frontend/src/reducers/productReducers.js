import {
   PRODUCT_DETAILS_FAIL,
   PRODUCT_DETAILS_REQUEST,
   PRODUCT_DETAILS_SUCCESS,
   PRODUCT_LIST_FAIL,
   PRODUCT_LIST_REQUEST,
   PRODUCT_LIST_SUCCESS,
   RECENT_PRODUCT_FAIL,
   RECENT_PRODUCT_REQUEST,
   RECENT_PRODUCT_SUCCESS,
} from '../constants/productConstants';

export const recentProductsReducer = (state = { products: [] }, action) => {
   switch (action.type) {
      case RECENT_PRODUCT_REQUEST:
         return { loading: true };
      case RECENT_PRODUCT_SUCCESS:
         return { loading: false, products: action.payload };
      case RECENT_PRODUCT_FAIL:
         return { loading: false };
      default:
         return state;
   }
};

export const productsReducer = (state = { products: [] }, action) => {
   switch (action.type) {
      case PRODUCT_LIST_REQUEST:
         return { loading: true };
      case PRODUCT_LIST_SUCCESS:
         return { loading: false, products: action.payload };
      case PRODUCT_LIST_FAIL:
         return { loading: false };
      default:
         return state;
   }
};

export const productReducer = (state = { product: {} }, action) => {
   switch (action.type) {
      case PRODUCT_DETAILS_REQUEST:
         return { loading: true };
      case PRODUCT_DETAILS_SUCCESS:
         return { loading: false, product: action.payload };
      case PRODUCT_DETAILS_FAIL:
         return { loading: false };
      default:
         return state;
   }
};
