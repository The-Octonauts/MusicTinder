import {connect} from "../database.utils";
import {Saved} from "../interfaces/saved";

export async function deleteSaved(saved: Saved) {
    try {
        const mySqlConnection = await connect()
        const mySqlDelete = 'DELETE FROM `saved` WHERE savedPodcastId = UUID_TO_BIN(:savedPodcastId) AND savedProfileId = UUID_TO_BIN(:savedProfileId)'
        const [result] = await mySqlConnection.execute(mySqlDelete, saved)
        return "Podcast successfully deleted"
    } catch(error) {
        throw error
    }
}