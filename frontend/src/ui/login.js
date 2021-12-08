import React from "react"
import { useDispatch, useSelector} from "react-redux";
import { fetchSignUp } from "../store/signUp";
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import podpal from "../assets/PodPaloutline.png"
import "./login.css"
import {SignUpForm, signUpForm} from "./signUp/signUpForm";
import {Formik, Form, Field} from "formik";
import {SignUpModal} from "./signUp/signUpModal";
import {SignInForm} from "./signIn/SignInForm";
import { SignOutComponent} from "./SignOut/SignOut";

/*export const FontLink = () => {
    return(
        <div className="card">
          <span className="font-link">
              This is with Font Link. We are linking the fonts from the Google Fonts.
          </span>
        </div>
    )
};*/


export const login = () => {
    return (
        <>
            <section>
                <Container className="backgroundColor">
                    <div className="background">
                    <Row>
                        <Col className="d-flex flex-column align-items-center">
                            <Image src={podpal} alt="PodPals" width="250" height="250"/>
                                <>
                                    <SignUpModal/>
                                </>
                            <h4 className="stroke blockquote">Meet friends who like the same Podcasts as you!</h4>
                        </Col>
                        <Col className="d-flex flex-column align-items-center">
                            <h2 className="display-5">Sign In</h2>
                            <>
                                <SignInForm/>
                            </>
                        </Col>
                    </Row>
                    </div>
                </Container>
            </section>
        </>
    )
}
