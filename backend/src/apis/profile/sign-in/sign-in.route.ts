import { Router } from 'express';
import { asyncValidatorController } from '../../../utils/controllers/asyncValidator.controller';
import { signInValidator } from './sign-in.validator';
import {signInController} from "./sign-in.controller";
import {checkSchema} from 'express-validator';

export const signinRouter: Router = Router();

signinRouter.route('/')
    .post(asyncValidatorController(checkSchema(signInValidator)), signInController);
