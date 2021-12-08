import {combineReducers, configureStore} from "@reduxjs/toolkit";
import podcast from "./podcast";
import auth from "./auth";
import profile from "./profile";

const reducer =  combineReducers({podcast, auth, profile})

export const store = configureStore({reducer})
