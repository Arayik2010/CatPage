import { combineReducers } from "redux";
import { categoryReducer } from "../reducers/categoryReducer";
import { catsReducer } from "./catsReducer";

export const rootReducer = combineReducers({
  categories: categoryReducer,
  cats: catsReducer,
});
