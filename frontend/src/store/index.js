import {combineReducers, configureStore} from "@reduxjs/toolkit";
import podcast from "./podcast";

const reducer =  combineReducers({podcast})

export const store = configureStore({reducer})
