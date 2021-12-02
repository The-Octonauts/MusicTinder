import React from "react"
import * as Yup from "yup";
import {httpConfig} from '../../utils/httpConfig'
import { Formik } from "formik";
import {signUpFormContent} from '../signUp/signUpFormContent'

export const signUpForm = (props) => {
    const {profile} = props

    const validationObject = Yup.object().shape({
        profileEmail: Yup.string()
            .email("email must be a valid email"),
        profilePassword: Yup.string()
            .min(8, "password must 8-32 characters long")
            .max(32, "password is too long"),
        profilePhotoUrl: Yup.mixed()
    });

    function submitSignUpForm (values, {resetForm, setStatus}) {

        const submitUpdatedSignUpForm = (updatedSignUp) => {
            httpConfig.put(`/apis/sign-up/$profile.profileId}`, updatedSignUp)
            .then(reply => {
                let {message, type} = reply;

                if (reply.status === 200) {
                    resetForm();
                }
                setStatus ({message, type});
                return (reply)
            })
        };

        if (values.profilePhotoUrl !== undefined) {
            httpConfig.post(`/apis/image-upload/`, values.profilePhotoUrl)
                .then(reply => {
                                let {message, type} = reply;

                                if (reply.status === 200) {
                                    submitUpdatedSignUpForm({...values, profilePhotoUrl:message})
                                } else {
                                    setStatus({message, type});
                                }
                }
                );
        } else {
                submitUpdatedSignUpForm(values);
        }
    }
    return (
        <Formik
            initialValues={profile}
            onSubmit={submitSignUpForm}
            validationSchema={validationObject}
            >
            {signUpFormContent}
        </Formik>
    )
};