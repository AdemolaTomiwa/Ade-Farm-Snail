import {
   MY_ORDER_LIST_FAIL,
   MY_ORDER_LIST_REQUEST,
   MY_ORDER_LIST_SUCCESS,
   MY_RECENT_ORDER_LIST_FAIL,
   MY_RECENT_ORDER_LIST_REQUEST,
   MY_RECENT_ORDER_LIST_SUCCESS,
   ORDER_CREATE_FAIL,
   ORDER_CREATE_REQUEST,
   ORDER_CREATE_RESET,
   ORDER_CREATE_SUCCESS,
   ORDER_DETAILS_FAIL,
   ORDER_DETAILS_REQUEST,
   ORDER_DETAILS_SUCCESS,
} from '../constants/orderConstants';

export const createOrderReducer = (state = {}, action) => {
   switch (action.type) {
      case ORDER_CREATE_REQUEST:
         return { loading: true };
      case ORDER_CREATE_SUCCESS:
         return { loading: false, order: action.payload };
      case ORDER_CREATE_FAIL:
         return { loading: false };
      case ORDER_CREATE_RESET:
      default:
         return state;
   }
};

export const getOrderReducer = (
   state = { order: {}, shippingAddress: {}, userObj: {}, orders: [] },
   action
) => {
   switch (action.type) {
      case ORDER_DETAILS_REQUEST:
         return { loading: true };
      case ORDER_DETAILS_SUCCESS:
         return {
            loading: false,
            order: action.payload,
            shippingAddress: action.payload.shippingAddress,
            userObj: action.payload.userObj,
            orders: action.payload.orderItems,
         };
      case ORDER_DETAILS_FAIL:
         return { loading: false };
      default:
         return state;
   }
};

export const getMyOrdersReducer = (state = { orders: [] }, action) => {
   switch (action.type) {
      case MY_ORDER_LIST_REQUEST:
         return { loading: true };
      case MY_ORDER_LIST_SUCCESS:
         return {
            loading: false,
            orders: action.payload,
         };
      case MY_ORDER_LIST_FAIL:
         return { loading: false };
      default:
         return state;
   }
};

export const getMyRecentOrdersReducer = (state = { orders: [] }, action) => {
   switch (action.type) {
      case MY_RECENT_ORDER_LIST_REQUEST:
         return { loading: true };
      case MY_RECENT_ORDER_LIST_SUCCESS:
         return {
            loading: false,
            orders: action.payload,
         };
      case MY_RECENT_ORDER_LIST_FAIL:
         return { loading: false };
      default:
         return state;
   }
};
