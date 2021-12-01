import {connect} from "../database.utils";
import {Swipe} from "../interfaces/Swipe";

export async function deleteSwipe ( swipe: Swipe) {
    try {
        const mySqlConnection = await connect()
        const mySqlDelete = 'DELETE FROM `swipe` WHERE swiperProfileId = UUID_TO_BIN(:swiperProfileId) AND swipeeReceiveProfileId = UUID_TO_BIN(:swipeeReceiveProfileId)'
        const [result] = await mySqlConnection.execute(mySqlDelete, swipe)
        return "swipe successfully deleted"
    } catch(error) {
        throw error
    }
}
