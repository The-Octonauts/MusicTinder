import {Schema} from 'express-validator';

export const podcastValidator : Schema = {
    podcastId: {
        isUUID: {
            errorMessage: 'please provide a valid podcastId'
        }
    },
    podcastName: {
        isUUID: {
            errorMessage: 'please provide a valid podcast name'
        }
    },
    podcastDescription: {
        isLength: {
            errorMessage: 'a tweet cannot be longer than 140 characters',
            options: { max: 140 }
        },
        trim: true,
        escape: true
    },
    podcastGenre: {
        toDate: true
    }
};
