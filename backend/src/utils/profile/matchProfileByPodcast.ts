import {connect} from "../database.utils";
import {Profile} from "../interfaces/Profile";
import {RowDataPacket} from "mysql2";

export async function selectMatchesByProfileId(profile: Profile) : Promise<string>{
    try {
        const mysqlConnection = await connect();
        const query = string = 'SELECT DISTINCT profileId FROM saved WHERE podcastId IN (SELECT podcastId FROM saved WHERE profileId= 'db605a6352f911ec83f90242ac180002') AND profileId != 'db605a6352f911ec83f90242ac180002'

        }
    } catch (error) {
        throw error
    }
}


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
