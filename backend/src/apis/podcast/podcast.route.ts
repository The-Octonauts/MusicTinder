import {Router} from 'express';
import {getAllPodcastController} from "./podcast.controller";

const podcastRouter = Router()

podcastRouter.route('/')
    .get( getAllPodcastController)

export default podcastRouter;