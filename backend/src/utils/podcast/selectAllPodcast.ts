import {connect} from "../database.utils";
import {RowDataPacket} from 'mysql2';
import {Show} from "../interfaces/Podcast";


export async function selectAllPodcast(): Promise<Array<Show>> {
    try {
        const mysqlConnection = await connect();

        const mysqlQuery: string = "SELECT BIN_TO_UUID(podcastId) as podcastId, podcastName, podcastGenre, podcastDescription, podcastImage FROM podcast"


        const result = await mysqlConnection.execute(mysqlQuery) as RowDataPacket[]


        return result[0] as Array<Show>
    }  catch (error) {
        console.log(error)
        throw error
    }
}