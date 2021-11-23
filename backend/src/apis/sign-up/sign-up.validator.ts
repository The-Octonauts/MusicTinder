import {Schema} from "express-validator";

export const signupValidator:Schema = {
    // profileId: {
    //     escape: true,
    //     trim: true,
    //     isLength: {
    //         errorMessage: 'Profile Id must be between 7 and 32 characters',
    //         options: {min: 1, max: 32}
    //     }
    // },
    profilePhotoUrl: {
        optional: true,
        isURL: {
            errorMessage: 'You must add a profile photo'
        }
    },
    profileEmail: {
        isEmail: {
            errorMessage: 'Please provide valid email'
        },
        //normalizeEmail: true,
        trim: true
    },
    profilePassword: {
        isLength: {
            errorMessage: 'Password must at least be eight characters',
            options: {min: 8}
        },
        trim: true,
        escape: true
    },
    profilePasswordConfirm: {
        isLength: {
            errorMessage: 'Confirm password must be at least eight characters',
            options: {min: 8}
        },
        trim: true,
        escape: true
    },
    // profilePodcast: {
    //     isArray: {
    //         errorMessage:
    //     }
    // }
};