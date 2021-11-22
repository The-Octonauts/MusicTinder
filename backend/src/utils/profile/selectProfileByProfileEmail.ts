import {connect} from "../database.utils";
import {Profile} from "../interfaces/Profile";
import {RowDataPacket} from "mysql2";

export async function selectProfileByProfileEmail(profileEmail: string): Promise<Profile|null> {
    try {
        const mysqlConnection = await connect();
        const sqlQuery: string = "SELECT BIN_TO_UUID(profileId) as profileId, profileActivationToken, profilePhotoId, profilePhotoUrl, profileEmail, profileHash FROM profile WHERE profileEmail = :profileEmail"\
        const rows: Profile[] = result[0] as Profile[]
        return rows.length === 1 ? {...rows[0]} : null;
    } catch (error) {
        throw error
    }
}