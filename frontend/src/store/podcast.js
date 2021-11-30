import {createSlice} from '@reduxjs/toolkit'
import {httpConfig} from "../utils/httpConfig"

// Define our reducer and action.
const podcastSlice = createSlice({
    name: "podcast",
    initialState: [],
    reducers: {
        getAllPodcasts: (podcasts, action) => {
            return action.payload
        },
    },
})

// Make our actions callable as function getAllMisquotes.
export const {getAllPodcasts} = podcastSlice.actions
// Create an export to allow async calls to our action
export const fetchAllPodcasts = () => async dispatch => {
    const {data} = await httpConfig(`/apis/podcast/`)
    dispatch(getAllPodcasts(data))
}

// We use export default here so that if something imports this file, they will get it by default
export default podcastSlice.reducer
