import {Request, Response, NextFunction} from 'express';
import {Status} from "../../utils/interfaces/Status";
import {insertMessage} from "../../utils/message/insertMessage";

export async function getMessageController(request: Request, response: Response): Promise<Response<Status>> {

    try {
        const data = await insertMessage()
        // return the response
        const status: Status = {status: 200, message: null, data};
        return response.json(status);
    } catch(error) {
        return response.json({
            status: 500,
            message: "",
            data: []
        })
    }
}