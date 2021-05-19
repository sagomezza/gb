// Libs
import { combineReducers } from "@reduxjs/toolkit";
// Slices
import example from "./example/exampleReducer";

const rootReducer = combineReducers({
  example,
});

export default rootReducer;
