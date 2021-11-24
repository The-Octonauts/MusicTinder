import {Show} from "../interfaces/Podcast";
import {connect} from "../database.utils";
import {ResultSetHeader, RowDataPacket} from 'mysql2';

export async function insertShow(show: Show) : Promise<string> {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = "INSERT INTO podcast(podcastId, podcastName, podcastGenre, podcastDescription ) VALUES(UUID_TO_BIN(UUID()), :podcastName, :podcastGenre, :podcastDescription)";

        const [result]= await mySqlConnection.execute(mySqlQuery, show) as [ResultSetHeader, RowDataPacket]
        return "Show created successfully"
    } catch (error) {
        throw error
    }
}
