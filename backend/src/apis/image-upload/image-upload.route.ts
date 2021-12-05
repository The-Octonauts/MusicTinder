import { Router } from 'express';

import {imageUploader} from "../../utils/controllers/multer.controller";
import {imageUploadController} from "./image-upload.controller";



export const ImageUploadRouter = Router();

ImageUploadRouter.route('/')
    .post(imageUploader, imageUploadController);