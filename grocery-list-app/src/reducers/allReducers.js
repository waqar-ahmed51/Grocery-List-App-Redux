import groceryItemReducer from "./groceryItem";
import totalCount from "./totalCount";
import { combineReducers } from "redux";

const allReducers=combineReducers({
    groceryItem:groceryItemReducer,
    totalItem:totalCount
}) 

export default allReducers;