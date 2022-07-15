import {
   createStore,
   applyMiddleware,
   combineReducers,
   // compose
} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { errorReducer } from './reducers/errorReducers';
import { productReducer, productsReducer } from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducers';
import {
   forgotPasswordReducer,
   loginReducer,
   registerReducer,
   resetPasswordReducer,
} from './reducers/userReducers';

const reducer = combineReducers({
   error: errorReducer,
   products: productsReducer,
   product: productReducer,
   cart: cartReducer,
   register: registerReducer,
   login: loginReducer,
   forgotPassword: forgotPasswordReducer,
   resetPassword: resetPasswordReducer,
});

const cartItemsFromStorage = localStorage.getItem('cartItems')
   ? JSON.parse(localStorage.getItem('cartItems'))
   : [];

const shippingAddressFromStorage = localStorage.getItem('shippingAddress')
   ? JSON.parse(localStorage.getItem('shippingAddress'))
   : {};

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
