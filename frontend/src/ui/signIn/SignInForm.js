import React, {useEffect} from 'react';
import {httpConfig} from "../../utils/httpConfig";
import {Formik} from "formik";
import * as Yup from "yup";
import {SignInFormContent} from "./SignInFormContent";
import {useDispatch, useSelector} from "react-redux";
import jwt_decode from "jwt-decode";
import {fetchAuth, getAuth} from "../../store/auth";
import Button from "react-bootstrap/Button";

export const SignInForm = () => {

    const dispatch = useDispatch()

    const validator = Yup.object().shape({
        profileEmail: Yup.string()
            .email("email must be a valid email")
            .required('email is required'),
        profilePassword: Yup.string()
            .required("Password is required")
            .min(8, "Password must be at least eight characters")
    });


    //the initial values object defines what the request payload is.
    const signIn = {
        profileEmail: "",
        profilePassword: ""
    };

    const submitSignIn = (values, {resetForm, setStatus}) => {
        httpConfig.post("/apis/sign-in/", values)
            .then(reply => {
                let {message, type} = reply;
                setStatus({message, type});
                if (reply.status === 200 && reply.headers["authorization"]) {
                    window.localStorage.removeItem("authorization");
                    window.localStorage.setItem("authorization", reply.headers["authorization"]);
                    resetForm();
                    let jwtToken = jwt_decode(reply.headers["authorization"])
                    dispatch(getAuth(jwtToken))
                }
                setStatus({message, type});
            });
    };
    const auth = useSelector(state => state.auth)
   const effects = () => {
        dispatch(fetchAuth())

   }
   useEffect(effects)

    const LoginRecommend = () => {
        return (
    <>
        {/*{(saved.savedProfileId !== null) ? (*/}
        {/*    < button href = "/recommend" > < /button>*/}
        {/*    ) : (*/}
        <Button href="/create-your-profile">Set up profile</Button>

    ) }
    </>
        )
    }
    return (
        <>
            {auth ? (
               <LoginRecommend/>
            ) : (
                <>
                    <Formik
                        initialValues={signIn}
                        onSubmit={submitSignIn}
                        validationSchema={validator}
                    >
                        {SignInFormContent}
                    </Formik>
                </>
            )}
        </>
    )
};


