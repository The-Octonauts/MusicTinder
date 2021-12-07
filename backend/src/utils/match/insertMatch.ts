import {Saved} from "../interfaces/Saved";
import {Profile} from "../interfaces/Profile";
import {connect} from "../database.utils";
import {RowDataPacket} from "mysql2";


export async function insertMatch(match: Saved): Promise<string> {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = "Insert Into `saved` (savedProfileId, savedPodcastId) VALUES (UUID_TO_BIN(:matchUserId), UUID_TO_BIN(:matcheeProfileId))";
        await mySqlConnection.execute(mySqlQuery, match)
        return "match done"
    }catch(error) {
        throw error
    }
}

export async function (profileActivationToken: string): Promise<Profile|null> {
    try {
        const mysqlConnection = await connect();
        const mysqlQuery: string = "SELECT BIN_TO_UUID(profileId) as profileId,  profilePhotoId, profilePhotoUrl, profileEmail, profileActivationToken, profileHash FROM profile WHERE profileId = UUID_TO_BIN(:profileId)"
        const result = await mysqlConnection.execute(mysqlQuery ,{profileActivationToken}) as RowDataPacket[]
        const rows: Profile[] = result[0] as Profile[]
        return rows.length === 1 ? {...rows[0]} : null;
    }  catch (error) {
        throw error
    }
}