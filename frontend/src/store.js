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

const reducer = combineReducers({
   error: errorReducer,
   products: productsReducer,
   product: productReducer,
});

const initialState = {};

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
