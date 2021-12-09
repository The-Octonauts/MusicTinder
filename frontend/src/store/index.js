import {combineReducers, configureStore} from "@reduxjs/toolkit";
import podcast from "./podcast";
import auth from "./auth";
import saved from "./saved";
import profile from "./profile";
import matches from "./matches";

const reducer =  combineReducers({podcast, auth, profile, saved, matches})

export const store = configureStore({reducer})
