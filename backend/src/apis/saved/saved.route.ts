import {Router} from 'express';
import {getAllSavedPodcasts} from "./saved.controller";




const savedRouter = Router()

savedRouter.route('/')
    .get( getAllSavedPodcasts)

export default savedRouter