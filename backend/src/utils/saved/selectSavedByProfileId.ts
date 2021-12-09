import {connect} from "../database.utils";
import {RowDataPacket} from 'mysql2';
import {Show} from "../interfaces/Podcast";
import {Saved} from "../interfaces/Saved";


export async function selectSavedBySavedProfileId(savedProfileId: string): Promise<Array<Saved>> {
    try {
        const mysqlConnection = await connect();
        const mysqlQuery: string = "SELECT BIN_TO_UUID(savedPodcastId) as savedPodcastId, BIN_TO_UUID(savedProfileId) as savedProfileId  FROM `saved` WHERE savedProfileId = UUID_TO_BIN(:savedProfileId)"
        const result = await mysqlConnection.execute(mysqlQuery, {savedProfileId}) as RowDataPacket[]

        return result[0] as Array<Saved>
    }  catch (error) {
        console.log('ERROR', error)
        throw error
    }
}

// import {connect} from "../database.utils";
// import {RowDataPacket} from 'mysql2';
// import {Saved} from "../interfaces/Saved";
//
//
// export async function selectSavedBySavedProfileId(savedProfileId : string): Promise<Array<Saved>> {
//     try {
//         const mysqlConnection = await connect();
//         const mysqlQuery: string = "SELECT BIN_TO_UUID" +
//             "(savedPodcastId) as savedPodcastId, BIN_TO_UUID(savedProfileId) as savedProfileId  FROM saved WHERE BIN_TO_UUID(savedProfileId)= : savedProfileId"
//         const result = await mysqlConnection.execute(mysqlQuery, {savedProfileId}) as RowDataPacket[]
//
//
//         return result[0] as Array<Saved>
//     }  catch (error) {
//         console.log(error)
//         throw error
//     }
// }