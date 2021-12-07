import {Profile} from "../interfaces/Profile";
import {connect} from "../database.utils";
import {RowDataPacket} from "mysql2";


export async function selectSavedPodcastIdToProfileId (saved: Profile): Promise<Profile|null> {
    try {
        const mysqlConnection = await connect();
        const mysqlQuery: string = "SELECT saved.savedProfileId, saved.savedPodcastId FROM saved WHERE saved.savedProfileId = savedProfileId = saved.savedProfileId order by profile.profileId)"
        const result = await mysqlConnection.execute(mysqlQuery ,) as RowDataPacket[]
    }  catch (error) {
        throw error
    }
}