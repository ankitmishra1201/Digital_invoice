import {legacy_createStore as createStore , combineReducers, applyMiddleware} from 'redux';

import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

//Reducer
import {cartReducer} from './reducers/cartReducer';
import {getProductsReducer, getProductDetailsReducer} from './reducers/productReducers';

const reducer = combineReducers({
    cart : cartReducer,
    getProducts: getProductsReducer,
    getProductsDetails: getProductDetailsReducer
});

const middleware = [thunk] ;
// helps us to make asynchronus requestsin our actions 

const cartItemsInLocalStorage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const INITIAL_STATE = {
    cart: {
      cartItems: cartItemsInLocalStorage,
    },
  };

const store = createStore(
    reducer,
    INITIAL_STATE,
    composeWithDevTools(applyMiddleware(...middleware)) // inhancer
)

export default store;