import {combineReducers} from "redux";
import RestaurantListReducer from "./reducer/RestaurantListReducer";

const rootReducer = combineReducers({data:RestaurantListReducer})

export default rootReducer;