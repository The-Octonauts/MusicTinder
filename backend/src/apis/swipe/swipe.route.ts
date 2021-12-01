import {Router} from 'express';
import {insertSwipe} from "../../utils/swipe/insertSwipe";
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";




export const swipeRouter = Router()

swipeRouter.route('/')
    .post(isLoggedIn, insertSwipe)

