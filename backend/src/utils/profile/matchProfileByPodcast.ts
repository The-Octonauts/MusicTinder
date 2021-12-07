import {connect} from "../database.utils";
import {Profile} from "../interfaces/Profile";
import {ResultSetHeader, RowDataPacket} from "mysql2";
import {Saved} from "../interfaces/Saved";
import {Show} from "../interfaces/Podcast";

export async function getSavedMatches(selectedProfileId: string) : Promise<any> {
    // 'db605a6352f911ec83f90242ac180002'
    // 'db605a6352f911ec83f90242ac180002'
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = "SELECT DISTINCT savedProfileId FROM saved WHERE savedPodcastId IN (SELECT savedPodcastId FROM saved WHERE savedProfileId='db605a6352f911ec83f90242ac180002') AND savedProfileId != 'db605a6352f911ec83f90242ac180002'"

        // const [result]= await mySqlConnection.execute(mySqlQuery, saved) as [ResultSetHeader, RowDataPacket]
        const [result] = await mySqlConnection.execute(mySqlQuery, {selectedProfileId})

        console.log('result',result);
        console.log('hey there', mySqlQuery);
        // return result
        // return "HELLOOOOOOOOOOOO"
        return result

    } catch (error) {
        throw error
    }
}



//
// export async function selectMatchesByProfileIdTest(profile: Profile) : Promise<string> {
//     try {
//         const mysqlConnection = await connect();
//         const query: string = "SELECT DISTINCT profileId FROM saved WHERE podcastId IN (SELECT podcastId FROM saved WHERE profileId='db605a6352f911ec83f90242ac180002') AND profileId != 'db605a6352f911ec83f90242ac180002'";
//         return 'hey there';
//
//     } catch (error) {
//         throw error
//     }
// }



//
// export async function selectMatchesByProfileId(profile: Profile) : Promise<string>{
//     try {
//         console.log("kghghjgkj",profile)
//         const mysqlConnection = await connect();
//         const query : string = 'INSERT INTO profile(profileId, profileActivationToken, profilePhotoUrl, profileEmail, profileHash, profilePhotoId) VALUES (UUID_TO_BIN(UUID()), :profileActivationToken, :profilePhotoUrl, :profileEmail, :profileHash, :profilePhotoId)';
//         await mysqlConnection.execute(query, profile);
//         return 'Profile Successfully Created'
//     } catch (error) {
//         throw error
//     }
// }
