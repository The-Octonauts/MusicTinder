import {Status} from "../../utils/interfaces/Status";
import {Request, Response} from "express";
import {PartialProfile, Profile} from "../../utils/interfaces/Profile";
import {selectWholeProfileByProfileId} from "../../utils/profile/selectWholeProfileByProfileId";
import {updateProfile} from "../../utils/profile/updateProfile";

export async function putProfileController(request: Request, response: Response) : Promise<Response>{
    try {
        const {profileId} = request.params
        const {profileEmail, profilePhotoUrl, profileBio, } = request.body
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
            ? performUpdate({profileId, profilePhotoUrl, profileEmail, profileBio,})
            : updateFailed("you are not allowed to perform this action")
    }   catch (error) {
        // @ts-ignore
        return response.json( {status: 400, data: null, message: error.message})
    }
}