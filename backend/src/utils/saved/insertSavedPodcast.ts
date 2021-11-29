import {Show} from "../interfaces/Podcast";
import {Saved} from "../interfaces/Saved";
import {connect} from "../database.utils";
import {ResultSetHeader, RowDataPacket} from 'mysql2';

export async function insertSavedPodcast(show: Show) : Promise<string> {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = "INSERT INTO saved(savedPodcastId, savedProfileId ) VALUES(UUID_TO_BIN(UUID()), :UUID_TO_BIN(UUID()))";

        const [result]= await mySqlConnection.execute(mySqlQuery, show) as [ResultSetHeader, RowDataPacket]
        return "Show created successfully"
    } catch (error) {
        throw error
    }
}
