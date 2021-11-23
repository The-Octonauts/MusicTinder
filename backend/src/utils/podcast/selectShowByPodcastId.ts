import {Show} from "../interfaces/Podcast";
import {connect} from "../database.utils";
import {RowDataPacket} from 'mysql2';

export async function selectShowByPodcastId(podcastId: string) : Promise<Show|null> {
    try {
        const mySqlConnection = await connect();
        const mySqlQuery = "SELECT BIN_TO_UUID(podcastId) AS podcastId, BIN_TO_UUID (podcastName) AS podcastName, podcastDescription, podcastGenre from show WHERE podcastId = UUID_TO_BIN(:podcastId)"
        const result = await mySqlConnection.execute(mySqlQuery, {profileId}) as RowDataPacket[]
        const shows : Array<Show> = result[0] as Array<Show>
        return shows.length === 1 ? {...shows[0]} : null;
    } catch (error) {
        throw error
    }
}
