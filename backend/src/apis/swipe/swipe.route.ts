import {Router} from 'express';
import {insertSwipe} from "../../utils/swipe/insertSwipe";




const swipeRouter = Router()

swipeRouter.route('/')
    .post( insertSwipe)

export default swipeRouter;