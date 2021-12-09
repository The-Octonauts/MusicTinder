import {Schema} from 'express-validator';

export const savedValidator : Schema = {
    savedProfileId: {
        isUUID: {
            errorMessage: 'please provide a valid profileId'
        },
        optional: true
    },
    savedPodcastId: {
        isUUID: {
            errorMessage: 'please provide a valid podcastId'
        }
    }
};