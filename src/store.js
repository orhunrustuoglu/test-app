import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import usersReducer from "./usersSlice";
import thunk from "redux-thunk";

export const store = configureStore(
  {
    reducer: {
      users: usersReducer,
    },
  },
  applyMiddleware(thunk)
);
