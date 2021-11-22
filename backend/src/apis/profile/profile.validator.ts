import {Schema} from "express-validator";

export const profileValidator: Schema = {
    profileId: {
        isUUID: {
            errorMessage: `please provide a valid profileId`
        }
    },
    profilePhotoUrl: {
        optional: {
            options: {
                nullable: false
            }
        },
        isURL: {
            errorMessage: "proile photo is ugly, please add something better"
        },
    },
    profileEmail: {
        isEmail: {
            errorMessage: 'Please provide a valid email'
        },
        trim: true
    },

};