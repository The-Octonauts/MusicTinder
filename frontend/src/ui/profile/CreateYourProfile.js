import React, {useEffect} from "react";
import './CreateYourProfile.css'
import {useDispatch, useSelector} from "react-redux";
import {EditProfileForm} from "./EditProfileForm";
import {fetchProfileByProfileId} from "../../store/profile";


export const CreateYourProfile = () => {
    const dispatch = useDispatch()


    const profile = useSelector(state => state.profile ? state.profile : null)
    const sideEffects = () => {
        dispatch(fetchProfileByProfileId())
    }
    useEffect(sideEffects, [])
    console.log(profile)


    return (
        <>
            {profile && <EditProfileForm profile={profile}/>}
        </>
    )
}

