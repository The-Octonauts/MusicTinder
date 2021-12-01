import {connect} from "../database.utils";
import {ResultSetHeader, RowDataPacket} from 'mysql2';
import {Swipe} from "../interfaces/Swipe";

export async function insertSwipe(swipe: Swipe) : Promise<string> {
    try {
        const mySqlConnection = await connect()
        // const mySqlQuery = "INSERT INTO swipe (swiperProfileId, swipeeReceiveProfileId,  swipeRight ) VALUES(UUID_TO_BIN(:swiperProfileId)), (UUID_TO_BIN(:swipeeReceiveProfileId)) ,swipeRight,";
        const mySqlQuery = "INSERT INTO swipe(swiperProfileId, swipeeReceiveProfileId, swipeRight) VALUES(UUID_TO_BIN(UUID()),(UUID_TO_BIN(:swipeeReceiveProfileId)),:swipeRight)";
        const [result]= await mySqlConnection.execute(mySqlQuery, swipe) as [ResultSetHeader, RowDataPacket]
        return "Swipe successful"
    } catch (error) {
        throw error
    }
}
