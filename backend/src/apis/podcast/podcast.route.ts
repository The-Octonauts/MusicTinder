
import { Router } from 'express';
/*import {
    getAllTweetsController,
    getTweetByTweetIdController,
    getTweetsByTweetProfileIdController,
    postTweet
} from './tweet.controller';*/
import { asyncValidatorController } from '../../utils/controllers/asyncValidator.controller';
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";
import {check} from 'express-validator';
import {checkSchema} from 'express-validator';
import {getShowByPodcastIdController, getShowsByPodcastIdController} from "./podcast.controller";
import {podcastValidator} from "./podcast.validator";
import {signupValidator} from "../sign-up/sign-up.validator";
import {signupProfileController} from "../sign-up/sign-up.controller";

export const showRoute = Router();
/*showRoute.route("/:podcastId").get(  asyncValidatorController([
    check("podcastId", "please provide a valid podcastId").isUUID()
]), getShowByPodcastIdController())*/


showRoute.route("/podcastName/:podcastName").get(
    asyncValidatorController(checkSchema(podcastValidator)),
); getShowsByPodcastIdController())

// Every new route is instantiated below. It will include the controller name and the type of action (get, post, delete, put, patch)
showRoute.route('/')
    .get( getAllShowsController)
    .post(isLoggedIn, asyncValidatorController(checkSchema(podcastValidator)), postShow);

export default class PodcastRoute {
}