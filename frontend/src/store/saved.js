import {createSlice} from '@reduxjs/toolkit'
import {httpConfig} from "../utils/httpConfig"

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
        getAllSavedPodcasts: (saved, action) => {
            return action.payload
        },
    },
})

// Make our actions callable as function getAllMisquotes.
export const {getAllSavedPodcasts} = savedSlice.actions
// Create an export to allow async calls to our action
export const fetchAllSavedPodcasts = () => async dispatch => {
    const {data} = await httpConfig(`/apis/saved/$auth.savedProfileId`)
    dispatch(getAllSavedPodcasts(data))
}

// We use export default here so that if something imports this file, they will get it by default
export default savedSlice.reducer
