import {combineReducers} from "redux";
import filtersReducer from "./filters";
import pizzasReducer from "./pizzas";
import cartReducer from "./cart";

const reducers = combineReducers({filtersReducer, pizzasReducer, cartReducer})

export default reducers