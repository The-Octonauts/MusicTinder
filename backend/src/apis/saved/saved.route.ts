import {Router} from 'express';
import {getUsersSavedPodcasts} from "./saved.controller";
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";


const savedRouter = Router();

savedRouter.route('/')
    .post(isLoggedIn, getUsersSavedPodcasts);

export default savedRouter