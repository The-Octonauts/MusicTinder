import {Show} from "../interfaces/Podcast";
import {Saved} from "../interfaces/Saved";
import {connect} from "../database.utils";
import {ResultSetHeader, RowDataPacket} from 'mysql2';

export async function insertSavedPodcast(saved: Saved) : Promise<string> {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = "INSERT INTO saved(savedPodcastId, savedProfileId ) VALUES(UUID_TO_BIN(:savedPodcastId),UUID_TO_BIN(:savedProfileId))"

        const [result]= await mySqlConnection.execute(mySqlQuery, saved) as [ResultSetHeader, RowDataPacket]
        return "Show created successfully"
    } catch (error) {
        throw error
    }
}
