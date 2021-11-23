export interface Profile {
    profileId : string|null,
    profilePhotoUrl: string|null,
    profilePhotoId: string|null,
    profileEmail: string,
    profileHash: string,
    profileActivationToken: string|null,
}
export interface PartialProfile {
    profileId: string|null,
    profilePhotoUrl: string,
    profileEmail: string,
}