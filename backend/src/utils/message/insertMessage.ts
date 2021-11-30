import {Message} from "../interfaces/Message";
import {connect} from "../database.utils";
import {ResultSetHeader, RowDataPacket} from "mysql2";

export async function insertMessage(message: Message) : Promise<string> {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = "INSERT INTO message(messageId, messageeProfileId, messageContent, messageProfileId) VALUES(UUID_TO_BIN(:messageId), UUID_TO_BIN(:messageProfileId) , :messageContent, UUUID_TO_BIN(:messageeProfileId))";

        const [result]= await mySqlConnection.execute(mySqlQuery, message) as [ResultSetHeader, RowDataPacket]
        return "Message Sent"
    } catch (error) {
        throw error
    }
}