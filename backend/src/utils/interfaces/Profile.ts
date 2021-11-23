export interface Profile {
    profileId : string|null,
    profilePhotoUrl: string,
    profileEmail: string,
}

export interface PartialProfile {
    profileId: string|null,
    profileActivationToken : string|null,
    profilePhotoId: string,
    profilePhotoUrl: string,
    profileEmail: string,
    profileHash: string,
}