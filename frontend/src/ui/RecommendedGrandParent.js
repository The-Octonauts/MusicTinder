import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchProfileByProfileId} from "../store/profile";
import {RecommendedParent} from "./RecommendedParent";

export const RecommendedGrandParent = () => {



const dispatch = useDispatch()
const profile = useSelector(state => state.profile ? state.profile : [])
const sideEffects = () => {
    dispatch(fetchProfileByProfileId())
}
useEffect(sideEffects,[])
console.log(profile)
return(
    <>

        {profile && <RecommendedParent key={profile.profileId} profile={profile}/>}

    </>
)

}