import {Router} from 'express';
import {getMessageController} from "./podcast.controller";

const messageRouter = Router()

messageRouter.route('/')
    .get( getMessageController)

export default messageRouter;