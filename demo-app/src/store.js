import { combineReducers, legacy_createStore } from "redux";
import cartReducer from "./redux/reducers/cartReducer";
import studentReducer from "./redux/reducers/studentReducer";
import {productReducer} from "./redux/reducers/productReducer";


const reducers=combineReducers({
    cart:cartReducer,
    student:studentReducer,
    products:productReducer
})
const store=legacy_createStore(reducers)

export default store