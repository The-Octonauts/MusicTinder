import {Request, Response, NextFunction} from 'express';

// Interfaces (represent the DB model and types of the columns associated with a specific DB table)
import {Status} from '../../utils/interfaces/Status';
import {Profile} from "../../utils/interfaces/Profile";
import {insertSavedPodcast} from "../../utils/saved/insertSavedPodcast"
import {selectAllPodcast} from "../../utils/podcast/selectAllPodcast";
import {selectAllPodcastsBySavedProfileId} from "../../utils/saved/selectAllPodcastsBySavedProfileId";
import {Saved} from "../../utils/interfaces/Saved";
import {getSavedMatches} from "../../utils/profile/matchProfileByPodcast";


export async function getAllPodcastsController(request: Request, response: Response): Promise<Response<Status>> {

    try {
        const data = await selectAllPodcast()
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

export async function getPodcastsBySavedProfileId(request : Request, response: Response, nextFunction: NextFunction): Promise<Response<Status>>{
    try {
        const     {savedProfileId} = request.params
        const data  = await selectAllPodcastsBySavedProfileId(savedProfileId)
        return response.json({status:200, message: null, data});
    } catch(error) {
        return response.json({
            status: 500,
            message: "",
            data: []
        })
    }
}

export async function getSavedMatchesTest(request : Request, response: Response, nextFunction: NextFunction): Promise<Response<Status>>{
    try {
        const {savedProfileId} = request.params
        console.log('request.params', request)
        const data  = await getSavedMatches(savedProfileId)
        console.log('THE DATA INHERE', data)
        return response.json({status:200, message: "You have matches", data});
    } catch(error) {

        return response.json({
            status: 500,
            message: error,
            data: []
        })
    }
}

export async function postUsersSavedPodcast(request: Request, response: Response) : Promise<Response<Status>> {
    try {

        const {savedPodcastId} = request.body;
        const profile : Profile = request.session.profile as Profile
        const savedProfileId : string = <string>profile.profileId

        const saved: Saved = {
            savedProfileId,
            savedPodcastId
        }
        const result = await insertSavedPodcast(saved)
        const status: Status = {
            status: 200,
            message: result,
            data: null
        };
        return response.json(status);

    } catch(error) {
        return  response.json({
            status: 500,
            message: "error saving podcast, try again later.",
            data: null
        });
    }
}




// export async function getSavedMatchesTest(request: Request, response: Response) : Promise<Response<Status>> {
//     try {
//         const {profileId} = request.body;
//         const saved : Saved = request.session.saved as Saved
//         const savedPodcastId : string = <string>saved.savedProfileId
//
//         const saved:Saved = {
//             savedProfileId,
//             savedPodcastId
//         }
//         const result = await getSavedMatches(saved)
//         const status: Status = {
//             status: 200,
//             message: result,
//             data: null
//         });
// return response.json(status);
//
//     } catch(error) {
//         return response.json({
//             status: 500,
//             message: "error saving podcast, try again later.",
//             data: null
//         });
//     }
// }

// export async function deleteTweet(request: Request, response: Response) {
// 	try {
// 		const {tweetId} = request.body;
// 		const result = await deleteTweet(tweetId)
// 		const status: Status = {status: 200, data, message: null}
// 		return response.json(status)
// 	} catch (error) {
// 		console.log(error)
// 	}
// }