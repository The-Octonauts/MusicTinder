import {connect} from "../database.utils";
import {Profile} from "../interfaces/Profile";
import {ResultSetHeader, RowDataPacket} from "mysql2";
import {Saved} from "../interfaces/Saved";
import {Show} from "../interfaces/Podcast";

export async function getSavedMatches(selectedProfileId: string) : Promise<Array<Show>> {
    //these are profile ids for testing
    // 'db605a6352f911ec83f90242ac180002'
    // 6ef386c3-5398-11ec-8a95-0242ac190002
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = "SELECT DISTINCT  BIN_TO_UUID(savedProfileId) FROM saved WHERE  BIN_TO_UUID(savedPodcastId) IN (SELECT  BIN_TO_UUID(savedPodcastId) FROM saved WHERE savedProfileId=UUID_TO_BIN(:selectedProfileId)) AND savedProfileId != UUID_TO_BIN(:selectedProfileId)"
        const result = await mySqlConnection.execute(mySqlQuery, {selectedProfileId}) as RowDataPacket[]

        //loop through the result list of profiles, and retrieve the profile information by those ids.
        // const getProfileInfo = "SELECT * FROM profile WHERE BIN_TO_UUID(profileId)"


        console.log('TEST',result);
        return result[0] as Array<Show>

    } catch (error) {
        throw error
    }
}



















/*import {connect} from "../database.utils";
import {Profile} from "../interfaces/Profile";
import {RowDataPacket} from "mysql2";

export async function matchProfileByPodcast(profileEmail: string): Promise<Profile|null> {
    try {
        const profilePodcast = [pod]

        }
    } catch (error) {
        throw error
    }
}*/
