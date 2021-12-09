import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchSavedBySavedProfileId} from "../store/saved";
import {RecommendedCousin} from "./RecommendedCousin";


export const RecommendedParent = ({profile}) => {



    const dispatch = useDispatch()
    const saved = useSelector(state => state.saved ? state.saved : [])
    const sideEffects = () => {
        dispatch(fetchSavedBySavedProfileId(profile.profileId))
    }
    useEffect(sideEffects,[profile.profileId])
    console.log(saved)
    console.log('profile.profileId in recommended parent', profile.profileId)
    return(
        <>
<h1>Recommended Parent</h1>

            {saved && <RecommendedCousin saved={saved}/>}


        </>
    )

}

