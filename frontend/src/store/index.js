import {combineReducers, configureStore} from "@reduxjs/toolkit";
import podcast from "./podcast";
import auth from "./auth";

const reducer =  combineReducers({podcast, auth})

export const store = configureStore({reducer})
