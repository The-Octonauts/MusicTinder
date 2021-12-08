import {combineReducers, configureStore} from "@reduxjs/toolkit";
import podcast from "./podcast";
import auth from "./auth";
import saved from "./saved";
import profile from "./profile";

const reducer =  combineReducers({podcast, auth, profile, saved})

export const store = configureStore({reducer})
