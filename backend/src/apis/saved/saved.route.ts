import {Router} from 'express';
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";
import {
    getAllPodcastsController,
    getPodcastsBySavedProfileId,
    getSavedMatchesTest,
    postUsersSavedPodcast
} from "./saved.controller";
import {asyncValidatorController} from "../../utils/controllers/asyncValidator.controller";
import {check, checkSchema} from "express-validator";
import {savedValidator} from "./saved.validator";
import {insertSavedPodcast} from "../../utils/saved/insertSavedPodcast";


export const savedRouter = Router();

savedRouter.route('/')
    .post(isLoggedIn, asyncValidatorController(checkSchema(savedValidator)),postUsersSavedPodcast);

savedRouter.route('/savedProfileId/:savedProfileId')
    .get(asyncValidatorController([check("savedProfileId", "Please provide a valid saved profileID").isUUID()]),getPodcastsBySavedProfileId);

savedRouter.route('/getProfileMatches/:savedProfileId')
    .get(asyncValidatorController([check("savedProfileId", "Please provide a valid saved profileID").isUUID()]),getSavedMatchesTest);

// savedRouter.route('/getProfileMatches')
//     .get(getSavedMatchesTest, function(res, req){
//         console.log('hellooo?')
//         return 'hiiiiii'
//     });