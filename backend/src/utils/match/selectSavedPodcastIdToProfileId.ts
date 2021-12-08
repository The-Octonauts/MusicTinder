import {Profile} from "../interfaces/Profile";
import {connect} from "../database.utils";
import {RowDataPacket} from "mysql2";
import {Saved} from "../interfaces/Saved";



export async function selectSavedPodcastIdToProfileId (saved: Profile): Promise<Saved|null> {
    try {
        const mysqlConnection = await connect();
        const mysqlQuery: string = "SELECT DISTINCT profileId FROM saved WHERE podcastId In (SELECT podcastID FROM saved Where profileId=25)AND profileId != 25"
        const result = await mysqlConnection.execute(mysqlQuery ,) as RowDataPacket[]
    }  catch (error) {
        throw error
    }
}