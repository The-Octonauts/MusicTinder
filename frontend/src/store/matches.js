import { createSlice } from '@reduxjs/toolkit'
import { fetchAuth } from './auth'
import { httpConfig } from '../../src/utils/httpConfig'
import {getProfileByProfileId} from "./profile";



const matchesSlice = createSlice({
    name: "matches",
    initialState: null,
    reducers: {
        setMatches: (matches, action) => {
            return action.payload
        },


    }
})

export const {setMatches} = matchesSlice.actions

export default matchesSlice.reducer


export const fetchMatchedProfilesByProfileId = (reply) => async (dispatch) => {

   const list = reply?.data.map(profile => {
        const matchedId = profile["BIN_TO_UUID(savedProfileId)"]
       const profileMatch = httpConfig.get(`/apis/profile/${matchedId}`).then(match => {
           return match.data
       })
       return profileMatch
    })

    Promise.all(list).then(values => {
        dispatch(setMatches(values))
    })
};