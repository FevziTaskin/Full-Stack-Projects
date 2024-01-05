import { combineReducers } from "redux";

import posts from "./posts";
import auth from "./auth";

/* A reducer is a function that changes the state according to the type of action  */
export const reducers = combineReducers({ posts, auth });
