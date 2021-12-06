import {createSlice} from '@reduxjs/toolkit'
import {httpConfig} from "../utils/httpConfig"
import auth from "./auth";

// Define our reducer and action.
const savedSlice = createSlice({
    name: "saved",
    initialState: [],
    reducers: {
        getAllSavedPodcasts: (saved, action) => {
            return action.payload
        },
    },
})

// Make our actions callable as function getAllMisquotes.
export const {getAllSavedPodcasts} = savedSlice.actions
// Create an export to allow async calls to our action
auth.savedProfileId = undefined;
export const fetchAllSavedPodcasts = () => async dispatch => {
    const {data} = await httpConfig(`/apis/saved/${auth.savedProfileId}`)
    dispatch(getAllSavedPodcasts(data))
}

// We use export default here so that if something imports this file, they will get it by default
export default savedSlice.reducer
