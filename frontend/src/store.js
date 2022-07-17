import {
   createStore,
   applyMiddleware,
   combineReducers,
   // compose
} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { errorReducer } from './reducers/errorReducers';
import {
   createProductReducer,
   productReducer,
   productsReducer,
   recentProductsReducer,
} from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducers';
import {
   adminCreateUserReducer,
   adminUserUpdateReducer,
   forgotPasswordReducer,
   loginReducer,
   recentUserListReducer,
   registerReducer,
   resetPasswordReducer,
   userListReducer,
   userReducer,
   userUpdateReducer,
} from './reducers/userReducers';
import {
   createOrderReducer,
   getMyOrdersReducer,
   getMyRecentOrdersReducer,
   getOrderReducer,
   getUserOrdersReducer,
   orderListReducer,
   recentOrderListReducer,
} from './reducers/orderReducers';

const reducer = combineReducers({
   error: errorReducer,
   recentProducts: recentProductsReducer,
   products: productsReducer,
   product: productReducer,
   cart: cartReducer,
   register: registerReducer,
   login: loginReducer,
   forgotPassword: forgotPasswordReducer,
   resetPassword: resetPasswordReducer,
   singleOrder: createOrderReducer,
   order: getOrderReducer,
   myOrders: getMyOrdersReducer,
   myRecentOrders: getMyRecentOrdersReducer,
   updateUser: userUpdateReducer,
   userList: userListReducer,
   userDetails: userReducer,
   recentUserList: recentUserListReducer,
   orderList: orderListReducer,
   recentOrderList: recentOrderListReducer,
   userOrder: getUserOrdersReducer,
   adminUpdateUser: adminUserUpdateReducer,
   createProduct: createProductReducer,
   createUser: adminCreateUserReducer,
});

const cartItemsFromStorage = localStorage.getItem('cartItems')
   ? JSON.parse(localStorage.getItem('cartItems'))
   : [];

const shippingAddressFromStorage = localStorage.getItem('shippingAddress')
   ? JSON.parse(localStorage.getItem('shippingAddress'))
   : {};

const paymentMethodFromStorage = localStorage.getItem('paymentMethod')
   ? JSON.parse(localStorage.getItem('paymentMethod'))
   : null;

const userInfoFromStorage = localStorage.getItem('user')
   ? JSON.parse(localStorage.getItem('user'))
   : null;

const userTokenFromStorage = localStorage.getItem('token')
   ? JSON.parse(localStorage.getItem('token'))
   : null;

const initialState = {
   cart: {
      cartItems: cartItemsFromStorage,
      shippingAddress: shippingAddressFromStorage,
      paymentMethod: paymentMethodFromStorage,
   },
   register: { user: userInfoFromStorage, token: userTokenFromStorage },
   login: { user: userInfoFromStorage, token: userTokenFromStorage },
};

const middleware = [thunk];

// // For Development
const store = createStore(
   reducer,
   initialState,
   composeWithDevTools(applyMiddleware(...middleware))
);

// For Production
// const store = createStore(
//     reducer,
//     initialState,
//     compose(applyMiddleware(...middleware))
//  );

export default store;
