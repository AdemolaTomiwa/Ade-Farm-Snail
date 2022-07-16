import axios from 'axios';
import { returnErrors } from './errorActions';
import { tokenConfig } from './userActions';
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

// Get a single Order
export const getOrder = (id) => (dispatch, getState) => {
   dispatch({ type: ORDER_DETAILS_REQUEST });

   axios
      .get(`/api/orders/${id}`, tokenConfig(getState))
      .then((res) => {
         dispatch({
            type: ORDER_DETAILS_SUCCESS,
            payload: res.data,
         });
      })
      .catch((err) => {
         dispatch(returnErrors(err.response.data.msg));
         dispatch({ type: ORDER_DETAILS_FAIL });
      });
};

export const createOrder = (order) => (dispatch, getState) => {
   dispatch({ type: ORDER_CREATE_REQUEST });

   axios
      .post('/api/orders', order, tokenConfig(getState))
      .then((res) => {
         dispatch({
            type: ORDER_CREATE_SUCCESS,
            payload: res.data,
         });

         dispatch({ type: ORDER_CREATE_RESET });

         localStorage.removeItem('cartItems');
      })
      .catch((err) => {
         dispatch(returnErrors(err.response.data.msg));
         dispatch({ type: ORDER_CREATE_FAIL });
      });
};

export const getMyRecentOrders = () => (dispatch, getState) => {
   dispatch({ type: MY_RECENT_ORDER_LIST_REQUEST });

   axios
      .get('/api/orders/myorders/mine/recent', tokenConfig(getState))
      .then((res) => {
         dispatch({
            type: MY_RECENT_ORDER_LIST_SUCCESS,
            payload: res.data,
         });
      })
      .catch((err) => {
         dispatch(returnErrors(err.response.data.msg));
         dispatch({ type: MY_RECENT_ORDER_LIST_FAIL });
      });
};

export const getMyOrders = () => (dispatch, getState) => {
   dispatch({ type: MY_ORDER_LIST_REQUEST });

   axios
      .get('/api/orders/myorders/mine', tokenConfig(getState))
      .then((res) => {
         dispatch({
            type: MY_ORDER_LIST_SUCCESS,
            payload: res.data,
         });
      })
      .catch((err) => {
         dispatch(returnErrors(err.response.data.msg));
         dispatch({ type: MY_ORDER_LIST_FAIL });
      });
};
