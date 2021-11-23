
import { Router } from 'express';
import {
    getAllTweetsController,
    getTweetByTweetIdController,
    getTweetsByTweetProfileIdController,
    postTweet
} from './tweet.controller';
import { asyncValidatorController } from '../../utils/controllers/asyncValidator.controller';
import { tweetValidator } from './tweet.validator';
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";
import {check} from 'express-validator';
import {checkSchema} from 'express-validator';
import {getShowByPodcastIdController, getShowsByPodcastIdController} from "./podcast.controller";
import {podcastValidator} from "./podcast.validator";

export const showRouter = Router();
router.route("/:podcastId").get(  asyncValidatorController([
    check("podcastId", "please provide a valid podcastId").isUUID()
]), getShowByPodcastIdController())


router.route("/podcastName/:podcastName").get(  asyncValidatorController([
    check("podcastName", "please provide a valid show name").isUUID()
]), getShowsByPodcastIdController())

// Every new route is instantiated below. It will include the controller name and the type of action (get, post, delete, put, patch)
router.route('/')
    .get( getAllShowsController)
    .post(isLoggedIn, asyncValidatorController(checkSchema(podcastValidator)), postShow);

export default router;
