import {combineReducers, configureStore} from "@reduxjs/toolkit";
import podcast from "./podcast";
import auth from "./auth";
import saved from "./saved";

const reducer =  combineReducers({podcast, auth, saved})

export const store = configureStore({reducer})
