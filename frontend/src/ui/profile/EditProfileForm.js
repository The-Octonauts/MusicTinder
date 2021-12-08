import React from "react"
import * as Yup from "yup";
import { httpConfig } from '../../utils/httpConfig'
import { Formik } from "formik";
import { EditProfileFormContent } from './EditProfileFormContent'


export const EditProfileForm = (props) => {
    const {profile} = props

    const validationObject = Yup.object().shape({
        profileBio: Yup.string()
            .required("Required")
            .min(1,"must be longer than 1 character")
        .max(1000,"Bio to long"),
        profilePhotoUrl: Yup.mixed()
            .required("Required"),
        podcastIds: Yup.array()
        .required("Required"),

    });

    function submitEditedProfile (values, {resetForm, setStatus}) {

        const submitUpdatedProfile = (updatedProfile) => {
            httpConfig.put(`/apis/profile/${profile.profileId}`, updatedProfile)
                .then(reply => {
                    let {message, type} = reply;

                    if (reply.status === 200) {
                        resetForm();
                    }
                    setStatus({message, type});
                    return (reply)
                })
        };

        if (values.profilePhotoUrl !== undefined) {
            httpConfig.post(`/apis/image-upload/`, values.profilePhotoUrl)
                .then(reply => {
                        let {message, type} = reply;

                        if (reply.status === 200) {
                            submitUpdatedProfile({...values, profilePhotoUrl:message})
                        } else {
                            setStatus({message, type});
                        }
                    }
                );
        } else {
            submitUpdatedProfile(values);
        }
    }

    return (
        <Formik
            initialValues={profile}
            onSubmit={submitEditedProfile}
            validationSchema={validationObject}
        >
            {EditProfileFormContent}
        </Formik>
    )

};