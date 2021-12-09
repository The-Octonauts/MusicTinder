import {Profile} from "../interfaces/Profile";
import {connect} from "../database.utils";


export async function updateProfile(profile: Profile): Promise<string>  {
    console.log(profile,"hey this the profile dudes")
    try {
        const mysqlConnection = await connect();
        const query : string = 'UPDATE profile SET profileActivationToken = :profileActivationToken, profilePhotoUrl = :profilePhotoUrl, profileEmail = :profileEmail, profileBio= :profileBio WHERE profileId = UUID_TO_BIN(:profileId)';
        await mysqlConnection.execute(query, profile)
        return 'Profile successfully updated'
    } catch (error) {
        throw error
    }
}