import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'
import { productDetailsReducer, productReducer } from './Reducers/ProductReducer';
import { categoryReducer } from './Reducers/CategoryReducer';
import { profileReducer, userReducer } from './Reducers/UserReducer';
import { cartReducer } from './Reducers/CartReducer';
import { AdminProductReducer } from './Reducers/AdminReducer/AdminProductReducer';
import { adminCategoriesReducer } from './Reducers/AdminReducer/AdminCategoryReducer';
import { getAllUser } from './Reducers/AdminReducer/UserReducer';

const reducer = combineReducers({
    p:productReducer,
    productDetail:productDetailsReducer,
    c:categoryReducer,
    auth:userReducer,
    cart:cartReducer,
    profile:profileReducer,
    adminProduct:AdminProductReducer,
    adminCategory:adminCategoriesReducer,
    Users:getAllUser
})

let initializeState = {
    cart: {
        cartItems: localStorage.getItem("cartItems")
          ? JSON.parse(localStorage.getItem("cartItems"))
          : [],
        shippingInfo: localStorage.getItem("shippingInfo")
          ? JSON.parse(localStorage.getItem("shippingInfo"))
          : {},
      },
}
const Store = createStore(reducer,initializeState,composeWithDevTools(applyMiddleware(thunk)))

export default Store