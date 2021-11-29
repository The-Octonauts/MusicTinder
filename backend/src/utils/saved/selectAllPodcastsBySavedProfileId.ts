import {connect} from "../database.utils";
import {RowDataPacket} from 'mysql2';
import {Show} from "../interfaces/Podcast";


export async function selectAllPodcastsBySavedProfileId(): Promise<Array<Show>> {
    try {
        const mysqlConnection = await connect();
        const mysqlQuery: string = "SELECT BIN_TO_UUID(savedPodcastId) as savedPodcastId, BIN_TO_UUID(savedProfileId) as savedProfileId  FROM `saved` WHERE savedPodcastId = UUID_TO_BIN(:savedPodcastId) AND savedProfileId = UUID_TO_BIN(:savedPodcastID)"
        const result = await mysqlConnection.execute(mysqlQuery) as RowDataPacket[]


        return result[0] as Array<Show>
    }  catch (error) {
        console.log(error)
        throw error
    }
}