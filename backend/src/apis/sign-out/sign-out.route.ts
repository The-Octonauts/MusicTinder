import { Router } from 'express';
import {signOutController} from "./sign-out.controller";

export const signoutRoute: Router = Router();

signoutRoute.route("/")
    .get(signOutController);
