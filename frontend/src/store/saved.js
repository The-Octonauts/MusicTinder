import {createSlice} from '@reduxjs/toolkit'
import {httpConfig} from "../utils/httpConfig"
import {fetchAuth} from "./auth";
import {getProfileByProfileId} from "./profile";

const initialState = {
    selectedData: "test select",
    hasSavedPodcasts: false,
    //TODO:Check if has any saved podcasts, and if so set to true, if not set to false.
};

// Define our reducer and action.
const savedSlice = createSlice({
    name: "saved",
    initialState: initialState,
    reducers: {
        getSavedBySavedProfileId: (saved, action) => {
            return action.payload
        },
    },
})

// Make our actions callable as function getAllMisquotes.
export const {getSavedBySavedProfileId} = savedSlice.actions
// Create an export to allow async calls to our action
export const fetchSavedBySavedProfileId = () => async (dispatch, getState) => {
    await dispatch(fetchAuth())
    const {auth} = getState()
    if (auth !== null) {
        const {data} = await httpConfig(`/apis/saved/getProfileMatches/${auth.profileId}`)
        dispatch(getSavedBySavedProfileId(data))
    }
}
// We use export default here so that if something imports this file, they will get it by default
export default savedSlice.reducer

