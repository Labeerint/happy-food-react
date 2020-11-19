import {combineReducers} from "redux";
import filtersReducer from "./filters";
import pizzasReducer from "./pizzas";

const reducers = combineReducers(filtersReducer, pizzasReducer)

export default reducers