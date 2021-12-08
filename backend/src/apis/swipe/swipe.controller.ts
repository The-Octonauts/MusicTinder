import {Request, Response, NextFunction} from 'express';
import {Status} from "../../utils/interfaces/Status";
import {insertSwipe} from "../../utils/swipe/insertSwipe";
import {deleteSwipe} from "../../utils/swipe/deleteSwipe";
import {Swipe} from "../../utils/interfaces/Swipe";
import {Profile} from "../../utils/interfaces/Profile";



export async function postSwipeController(request: Request, response: Response): Promise<Response<Status>> {

    try {
        const {swipeeReceiveProfileId, swipeRight} = request.body
        const profile = <Profile>request.session.profile
        const swiperProfileId = <string>profile.profileId

        const swipe: Swipe = {
            swiperProfileId,
            swipeeReceiveProfileId,
            swipeRight
        }
        console.log("swipe from swipe controller line 22", swipe)
        const data = await insertSwipe(swipe)
        // return the response
        const status: Status = {status: 200, message: 'added successfully', data};
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
            const {swipeRight, swipeeReceiveProfileId} = request.body
            const profile = <Profile>request.session.profile
            const swiperProfileId = <string>profile.profileId
            const swipe: Swipe={
                swiperProfileId,
                swipeeReceiveProfileId,
                swipeRight,
            }
            const data = await deleteSwipe(swipe)
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

