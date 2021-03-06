import {
   PRODUCT_CREATE_FAIL,
   PRODUCT_CREATE_REQUEST,
   PRODUCT_CREATE_RESET,
   PRODUCT_CREATE_REVIEW_FAIL,
   PRODUCT_CREATE_REVIEW_REQUEST,
   PRODUCT_CREATE_REVIEW_RESET,
   PRODUCT_CREATE_REVIEW_SUCCESS,
   PRODUCT_CREATE_SUCCESS,
   PRODUCT_DELETE_FAIL,
   PRODUCT_DELETE_REQUEST,
   PRODUCT_DELETE_RESET,
   PRODUCT_DELETE_SUCCESS,
   PRODUCT_DETAILS_FAIL,
   PRODUCT_DETAILS_REQUEST,
   PRODUCT_DETAILS_SUCCESS,
   PRODUCT_LIST_FAIL,
   PRODUCT_LIST_REQUEST,
   PRODUCT_LIST_SUCCESS,
   PRODUCT_UPDATE_FAIL,
   PRODUCT_UPDATE_REQUEST,
   PRODUCT_UPDATE_RESET,
   PRODUCT_UPDATE_SUCCESS,
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

export const productReducer = (
   state = { product: {}, reviews: [] },
   action
) => {
   switch (action.type) {
      case PRODUCT_DETAILS_REQUEST:
         return { loading: true };
      case PRODUCT_DETAILS_SUCCESS:
         return {
            loading: false,
            product: action.payload,
            reviews: action.payload.reviews,
         };
      case PRODUCT_DETAILS_FAIL:
         return { loading: false };
      default:
         return state;
   }
};

export const createProductReducer = (state = { product: {} }, action) => {
   switch (action.type) {
      case PRODUCT_CREATE_REQUEST:
         return { loading: true };
      case PRODUCT_CREATE_SUCCESS:
         return { loading: false, product: action.payload, success: true };
      case PRODUCT_CREATE_FAIL:
         return { loading: false };
      case PRODUCT_CREATE_RESET:
         return {};
      default:
         return state;
   }
};

export const createReviewsReducer = (state = { product: {} }, action) => {
   switch (action.type) {
      case PRODUCT_CREATE_REVIEW_REQUEST:
         return { loadingReview: true };
      case PRODUCT_CREATE_REVIEW_SUCCESS:
         return {
            loadingReview: false,
            success: true,
            successMsg: action.payload.msg,
         };
      case PRODUCT_CREATE_REVIEW_FAIL:
         return { loadingReview: false };
      case PRODUCT_CREATE_REVIEW_RESET:
         return {};
      default:
         return state;
   }
};

export const productUpdateReducer = (state = {}, action) => {
   switch (action.type) {
      case PRODUCT_UPDATE_REQUEST:
         return { loading: true };
      case PRODUCT_UPDATE_SUCCESS:
         return {
            loading: false,
            success: true,
         };
      case PRODUCT_UPDATE_FAIL:
         return { loading: false };
      case PRODUCT_UPDATE_RESET:
         return {};
      default:
         return state;
   }
};

export const deleteProductReducer = (state = {}, action) => {
   switch (action.type) {
      case PRODUCT_DELETE_REQUEST:
         return { loading: true };
      case PRODUCT_DELETE_SUCCESS:
         return { loading: false, success: true };
      case PRODUCT_DELETE_FAIL:
         return { loading: false };
      case PRODUCT_DELETE_RESET: {
         return {};
      }
      default:
         return state;
   }
};
