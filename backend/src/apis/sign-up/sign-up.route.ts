import {Router} from "express";
import {signupProfileController} from './sign-up.controller';
import {param} from "express-validator";
import { signupValidator } from './sign-up.validator';
import { asyncValidatorController } from '../../utils/controllers/asyncValidator.controller';
import {activationController}from "./activation.controller";
const {checkSchema} = require('express-validator');

export const signupRoute: Router = Router();

signupRoute.route('/')
    .post(
        asyncValidatorController(checkSchema(signupValidator)),
        signupProfileController
    );

signupRoute.route('/activation/:activation')
    .get(
        asyncValidatorController([param("activation", "invalid activation link").isHexadecimal().notEmpty()]),
        activationController
    )