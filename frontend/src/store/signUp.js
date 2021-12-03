/*
import { createSlice } from '@reduxjs/toolkit'
import { httpConfig } from '../utils/httpConfig'
import {fetchAuth} from "./auth";

const signUpSlice = createSlice({
    name: "signUp",
    initialState: null,
    reducers: {
        signUp: (profile, action) => {
            return action.payload
        }
    }
})

export const {signUp} = signUpSlice.actions

export default signUpSlice.reducer

export const fetchSignUp = () => async (dispatch, getState) => {
    await dispatch(fetchAuth())
    const {auth} = getState()
    console.log(auth)
    if(auth !== null) {
        const {data} = await httpConfig.get(`/apis/sign-up/${auth.profileId}`)
        console.log(data)
        dispatch(signUp(data))
    }
}

*/
