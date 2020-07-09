import { combineReducers } from "redux";
import { products } from "./products";
import { categories } from "./categories";
import { choosenCategories } from "./choosenCategories";
import { model } from "./model";

export const rootReducer = combineReducers({
  products,
  categories,
  choosenCategories,
  model,
});
