import {Request, Response} from "express";
import {Profile} from "../../utils/interfaces/Profile";
import {Status} from "../../utils/interfaces/Status";
import {selectWholeProfileByProfileId} from "../../utils/profile/selectWholeProfileByProfileId";
import {updateProfile} from "../../utils/profile/updateProfile";


export async function putProfileController(request: Request, response: Response) : Promise<Response>{
    try {
        const {profileId} = request.params
        const {profileEmail, profilePhotoUrl, } = request.body
        const profile = <Profile>request.session.profile
        const profileIdFromSession = <string>profile.profileId

        const performUpdate = async (partialProfile: PartialProfile) : Promise<Response> => {
            const previousProfile: Profile = await selectWholeProfileByProfileId(<string>partialProfile.profileId) as Profile
            const newProfile: Profile = {...previousProfile, ...partialProfile}
            await updateProfile(newProfile)
            return response.json({status: 200, data: null, message: "Profile successfully updated"})
        }

        const updateFailed = (message: string) : Response => {
            return response.json({status: 400, data: null, message})
        }

        return profileId === profileIdFromSession
            ? performUpdate({profileId, profilePhotoUrl, profileEmail})
            : updateFailed("you are not allowed to perform this action")
    }   catch (error) {
        return response.json( {status: 400, data: null, message: error.message})
    }
}


export async function getProfileByProfileId(request: Request, response: Response) : Promise<Response> {
    try {
        const {profileId} = request.params;
        const mySqlResult = await selectPartialProfileByProfileId(profileId);
        const data = mySqlResult ?? null
        const status: Status = {status: 200, data, message: null}
        return response.json(status)

    }   catch (error) {
        return(response.json({status:400, data:null, message: error.message}))

    }

}