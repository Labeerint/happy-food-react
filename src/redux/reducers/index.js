import {combineReducers} from "redux";
import filtersReducer from "./filters";
import productsReducer from "./products";
import cartReducer from "./cart";

const reducers = combineReducers({filtersReducer, pizzasReducer: productsReducer, cartReducer})

export default reducers