import {connect} from "../database.utils";
import {Profile} from "../interfaces/Profile";

export async function selectMatchesByProfileId(profile: Profile) : Promise<string>{
    try {
        console.log("kghghjgkj",profile)
        const mysqlConnection = await connect();
        const query : string = 'INSERT INTO profile(profileId, profileActivationToken, profilePhotoUrl, profileEmail, profileHash, profilePhotoId) VALUES (UUID_TO_BIN(UUID()), :profileActivationToken, :profilePhotoUrl, :profileEmail, :profileHash, :profilePhotoId)';
        await mysqlConnection.execute(query, profile);
        return 'Profile Successfully Created'
    } catch (error) {
        throw error
    }
}