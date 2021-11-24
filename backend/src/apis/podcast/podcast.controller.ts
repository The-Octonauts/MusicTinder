import {Request, Response, NextFunction} from 'express';

// Interfaces (represent the DB model and types of the columns associated with a specific DB table)
import {Status} from '../../utils/interfaces/Status';
import {Profile} from "../../utils/interfaces/Profile";
import {insertShow} from "../../utils/podcast/insertPodcast"

export async function getAllShowsController(request: Request, response: Response): Promise<Response<Status>> {

    try {
        const data = await selectAllShows()
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

export async function getShowsByPodcastIdController(request : Request, response: Response, nextFunction: NextFunction): Promise<Response<Status>>{
    try {
        const     {podcastId} = request.params
        const data  = await selectShowsByPodcastId(podcastId)
        return response.json({status:200, message: null, data});
    } catch(error) {
        return response.json({
            status: 500,
            message: "",
            data: []
        })
    }
}

export async function getShowByPodcastIdController(request : Request, response: Response, nextFunction: NextFunction) : Promise<Response<Status>>{
    try {
        const     {podcastId} = request.params
        const data  = await selectShowByPodcastId(podcastId)
        return response.json({status:200, message: null, data});
    } catch(error) {
        return response.json({
            status: 500,
            message: "",
            data: null
        })
    }
}

export async function postPodcast(request: Request, response: Response) : Promise<Response<Status>> {
    try {

        const {podcastDescription} = request.body;
        const profile : Profile = request.session.profile as Profile
        const podcastId : string = <string>profile.profileId

        const show: Show = {
            podcastId: null,
            podcastName,
            podcastDescription: null,
            podcastGenre
        }
        const result = await insertShow(show)
        const status: Status = {
            status: 200,
            message: result,
            data: null
        };
        return response.json(status);

    } catch(error) {
        return  response.json({
            status: 500,
            message: "Error Creating podcast directory try again later.",
            data: null
        });
    }
}



/*
// export async function deleteTweet(request: Request, response: Response) {
// 	try {
// 		const {tweetId} = request.body;
// 		const result = await deleteTweet(tweetId)
// 		const status: Status = {status: 200, data, message: null}
// 		return response.json(status)
// 	} catch (error) {
// 		console.log(error)
// 	}
// }*/
