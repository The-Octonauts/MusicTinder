import {Request, Response, NextFunction} from 'express';
import {Status} from "../../utils/interfaces/Status";
import {selectAllPodcast} from "../../utils/podcast/selectAllPodcast";
import {selectAllPodcastsBySavedProfileId} from "../../utils/saved/selectAllPodcastsBySavedProfileId";











export async function getAllSavedPodcasts(request: Request, response: Response): Promise<Response<Status>> {

    try {
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
    }
}