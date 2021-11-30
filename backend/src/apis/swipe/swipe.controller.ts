import {Request, Response, NextFunction} from 'express';
import {Status} from "../../utils/interfaces/Status";
import {insertSwipe} from "../../utils/swipe/insertSwipe";
import {deleteSwipe} from "../../utils/swipe/deleteSwipe";











export async function insertSwipeController(request: Request, response: Response): Promise<Response<Status>> {

    try {
        const data = await insertSwipe(`swipe`)
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





    export async function deleteSwipeController(request: Request, response: Response): Promise<Response<Status>> {

        try {
            const data = await deleteSwipe(`swipe`)
            // return the response
            const status: Status = {status: 200, message: null, data};
            return response.json(status);
        } catch(error) {
            return response.json({
                status: 500,
                message: "",
                data: []
            });
        }
        }