import axios from 'axios';
import {
   PRODUCT_LIST_FAIL,
   PRODUCT_LIST_REQUEST,
   PRODUCT_LIST_SUCCESS,
} from '../constants/productConstants';
import { returnErrors } from './errorActions';

export const getProducts = () => (dispatch) => {
   dispatch({ type: PRODUCT_LIST_REQUEST });

   axios
      .get('/api/products')
      .then((res) =>
         dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: res.data,
         })
      )
      .catch((err) => {
         dispatch(returnErrors(err.response.data.msg));
         dispatch({ type: PRODUCT_LIST_FAIL });
      });
};
