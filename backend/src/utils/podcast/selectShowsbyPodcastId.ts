import {Show} from "../interfaces/Podcast";
import {connect} from "../database.utils";
import {RowDataPacket} from 'mysql2';

export async function selectShowsByPodcastId(podcastName: string) : Promise<Show[]> {
    try {
        const mySqlConnection = await connect();
        const mySqlQuery = 'SELECT BIN_TO_UUID(profileId) AS profileId, BIN_TO_UUID (podcastName) AS podcastName, podcastDescription, podcastGenre, profile.profileAtHandle, profile.profilePhotoUrl, (SELECT COUNT(*) FROM `saved` WHERE show.podcastId = saved.savedPodcastId) AS savedProfileId FROM show INNER JOIN profile ON profile.profileId = show.podcastId WHERE podcastId = UUID_TO_BIN(:podcastName) ORDER BY tweetGenre DESC'
        const result = await <RowDataPacket>mySqlConnection.execute(mySqlQuery, {podcastName})
        return result[0] as Show[]
    } catch (error) {
        throw error
    }
}

