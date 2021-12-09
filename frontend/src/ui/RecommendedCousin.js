import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchSavedBySavedProfileId} from "../store/saved";
import {Recommend} from './Recommend'
import {fetchMatchedProfilesByProfileId} from "../store/matches";


export const RecommendedCousin = ({saved}) => {



    const dispatch = useDispatch()
    const matches = useSelector(state => state.matches ? state.matches : [])
    const sideEffects = () => {
        dispatch(fetchMatchedProfilesByProfileId(saved))
    }
    useEffect(sideEffects,[saved])
    console.log(matches)
    return(
        <>

            {matches && <Recommend matches={matches}/>}

        </>
    )

}

