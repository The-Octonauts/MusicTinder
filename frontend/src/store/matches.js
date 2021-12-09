import { createSlice } from '@reduxjs/toolkit'
import { httpConfig } from '../utils/httpConfig'



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


export const fetchMatchedProfilesByProfileId = (saved) => async (dispatch) => {
    console.log('saved!', saved)

    if(saved.length){


    let list = []
    for(const profile of saved) {

   // const list = reply?.data.map(profile => {
        const matchedId = profile.savedProfileId
       const profileMatch = await httpConfig.get(`/apis/profile/${matchedId}`)
           list.push(profileMatch.data)


    }

        dispatch(setMatches(list))}

};