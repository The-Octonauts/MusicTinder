import { createSlice } from '@reduxjs/toolkit'
import { fetchAuth } from './auth'
import { httpConfig } from '../../src/utils/httpConfig'
//
// const initialState = {
//     matches: []
// };
const profileSlice = createSlice({
    name: "profile",
    initialState: null,
    reducers: {
        getProfileByProfileId: (profile, action) => {
            return action.payload
        },

    }
})

export const {getProfileByProfileId} = profileSlice.actions

export default profileSlice.reducer

export const fetchProfileByProfileId = () => async (dispatch, getState) => {
    await dispatch(fetchAuth())
    const {auth} = getState()
    console.log(auth)
    if(auth !== null) {
        const {data} = await httpConfig.get(`/apis/profile/${auth.profileId}`)
        console.log(data)
        dispatch(getProfileByProfileId(data))
    }
}

// export const fetchMatchedProfilesByProfileId = (reply) => async (dispatch, getState) => {
//     console.log('inside fetched matched', reply)
//     console.log('getstate', getState())
//     reply.data.map(profile => {
//         console.log(profile)
//         const matchedId = profile["BIN_TO_UUID(savedProfileId)"]
//         httpConfig.get(`/apis/profile/${matchedId}`).then(match => {
//             console.log(match, '1')
//          /*   dispatch(setSelectedMatch(match))*/
//         })
//
// })
// /* const {data} = await httpConfig.get(`/apis/profile/${auth.profileId}`)
//  console.log(data)
//  dispatch(getProfileByProfileId(data))*/
// };