/*
import {Request, Response, NextFunction} from 'express';
import {Status} from "../../utils/interfaces/Status";
import {Profile} from "../../utils/interfaces/Profile";
import {Saved} from "../../utils/interfaces/Saved";
import {selectAllPodcastsBySavedProfileId} from "../../utils/saved/selectAllPodcastsBySavedProfileId";
import {insertSavedPodcast} from "../../utils/saved/insertSavedPodcast";
import {deleteSaved} from "../../utils/saved/deleteSaved";



export async function getUsersSavedPodcasts(request: Request, response: Response): Promise<Response<Status>> {
    try {

        const {savedPodcastId} = request.body;
        const profile = <Profile>request.session.profile
        const savedProfileId = <string>profile.profileId

        const saved: Saved = {
            savedProfileId,
            savedPodcastId
        }
export async function addUsersSavedPodcasts(request: Request, response: Response): Promise<Response<NextFunction>> {
      try {
        const select = await selectAllPodcastsBySavedProfileId(saved)
        if (select[0]){
            const result = await deleteSaved(saved)
        }else{
            const result = await insertSavedPodcast(saved)
        }

        const status: Status = {
            status: 200,
            message: 'Podcast successfully saved',
            data: null
        };
        return response.json(status);

    } catch(error: any) {
        return(response.json({status: 500, data: null, message: error.message}))
    }





    /!*try {
        const data = await selectAllPodcastsBySavedProfileId()
        // return the response
        const status: Status = {status: 200, message: null, data};
        return response.json(status);
    } catch(error) {
        return response.json({
            status: 500,
            message: "",
            data: []
        })
    }*!/
}*/
