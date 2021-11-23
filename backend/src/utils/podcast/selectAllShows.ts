import {Show} from "../interfaces/Podcast";
import {connect} from "../database.utils";
import {Profile} from "../interfaces/Profile";
import {Status} from "../interfaces/Status";
import {RowDataPacket,} from "mysql2"

export async function selectAllShows() : Promise<Show[]> {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = 'SELECT BIN_TO_UUID(podcastId) AS podcastId, BIN_TO_UUID (podcastName) AS podcastId, podcastDescription, podcastGenre, profile.profileId, profile.profilePhotoUrl, (SELECT COUNT(*) FROM `saved` WHERE show.podcastId = saved.savedPodcastId) AS savedId FROM show INNER JOIN profile ON profile.profileId = show.podcastName ORDER BY podcastGenre DESC'
        const result = await mySqlConnection.execute(mySqlQuery) as RowDataPacket[]
        return result[0] as Array<Show>
    } catch (error) {
        throw error
    }
}