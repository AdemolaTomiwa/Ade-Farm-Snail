import {
   GET_USER_RESET_PASSWORD_FAIL,
   GET_USER_RESET_PASSWORD_REQUEST,
   GET_USER_RESET_PASSWORD_RESET,
   GET_USER_RESET_PASSWORD_SUCCESS,
   USER_LOGIN_FAIL,
   USER_LOGIN_REQUEST,
   USER_LOGIN_SUCCESS,
   USER_LOGOUT,
   USER_REGISTER_FAIL,
   USER_REGISTER_REQUEST,
   USER_REGISTER_SUCCESS,
   USER_RESET_PASSWORD_FAIL,
   USER_RESET_PASSWORD_REQUEST,
   USER_RESET_PASSWORD_RESET,
   USER_RESET_PASSWORD_SUCCESS,
} from '../constants/userConstants';

export const loginReducer = (state = {}, action) => {
   switch (action.type) {
      case USER_LOGIN_REQUEST:
         return { loading: true };
      case USER_LOGIN_SUCCESS:
         return {
            loading: false,
            user: action.payload.user,
            token: action.payload.token,
         };
      case USER_LOGIN_FAIL:
         return { loading: false };
      case USER_LOGOUT:
         return {};
      default:
         return state;
   }
};

export const registerReducer = (state = {}, action) => {
   switch (action.type) {
      case USER_REGISTER_REQUEST:
         return { loading: true };
      case USER_REGISTER_SUCCESS:
         return {
            loading: false,
            user: action.payload.user,
            token: action.payload.token,
         };
      case USER_REGISTER_FAIL:
         return { loading: false };
      case USER_LOGOUT:
         return {};
      default:
         return state;
   }
};

export const forgotPasswordReducer = (state = {}, action) => {
   switch (action.type) {
      case GET_USER_RESET_PASSWORD_REQUEST:
         return { loading: true };
      case GET_USER_RESET_PASSWORD_SUCCESS:
         return { loading: false, successMsg: action.payload.msg };
      case GET_USER_RESET_PASSWORD_FAIL:
         return { loading: false };
      case GET_USER_RESET_PASSWORD_RESET:
         return {};
      default:
         return state;
   }
};

export const resetPasswordReducer = (state = {}, action) => {
   switch (action.type) {
      case USER_RESET_PASSWORD_REQUEST:
         return { loading: true };
      case USER_RESET_PASSWORD_SUCCESS:
         return { loading: false, successMsg: action.payload.msg };
      case USER_RESET_PASSWORD_FAIL:
         return { loading: false };
      case USER_RESET_PASSWORD_RESET:
         return {};
      default:
         return state;
   }
};
