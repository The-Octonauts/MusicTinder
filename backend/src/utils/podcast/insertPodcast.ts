import {Show} from "../interfaces/Podcast";
import {connect} from "../database.utils";
import {ResultSetHeader, RowDataPacket} from 'mysql2';

export async function insertShow(show: Show) : Promise<string> {
    try {
        const mySqlConnection = await connect()
<<<<<<< HEAD

        const mySqlQuery = "INSERT INTO podcast(podcastId, podcastName, podcastGenre, podcastDescription, podcastImage  ) VALUES(UUID_TO_BIN(UUID()), :podcastName, :podcastGenre, :podcastDescription, :podcastImage)";

=======
<<<<<<< HEAD
        const mySqlQuery = "INSERT INTO podcast(podcastId, podcastName, podcastGenre, podcastDescription, podcastImage  ) VALUES(UUID_TO_BIN(UUID()), :podcastName, :podcastGenre, :podcastDescription, :podcastImage)";
=======
        const mySqlQuery = "INSERT INTO podcast(podcastId, podcastName, podcastGenre, podcastDescription, podcastImage ) VALUES(UUID_TO_BIN(UUID()), :podcastName, :podcastGenre, :podcastDescription, :podcastImage)";
>>>>>>> bc650d20f03eb8768cc407cde5a0e1c8e5feb7a1
>>>>>>> testing

        const [result]= await mySqlConnection.execute(mySqlQuery, show) as [ResultSetHeader, RowDataPacket]
        return "Show created successfully"
    } catch (error) {
        throw error
    }
}
