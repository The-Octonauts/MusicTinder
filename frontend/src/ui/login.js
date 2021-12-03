import React from "react"
import { useDispatch, useSelector} from "react-redux";
import { fetchSignUp } from "../store/signUp";
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import podpal from "../assets/PodPal (1).png"
import "./login.css"
import {signUpForm} from "./signUp/signUpForm";
import {Formik, Form, Field} from "formik";
import {SignUpModal} from "./signUp/signUpModal";
import {SignInForm} from "./signIn/SignInForm";

export const login = () => {
    return (
        <>
            <section>
                <Container className="backgroundColor">
                    <div className="background">
                    <Row>
                        <Col className="d-flex flex-column align-items-center">
                            <h1>Just Swipe It</h1>
                            <Image src={podpal} alt="PodPals" width="400px" height="400px"/>
                                <>
                                    <SignUpModal/>
                                </>
                            <h4>Meet friends who like the same Podcasts as you!</h4>

                        </Col>
                        <Col className="d-flex flex-column align-items-center">
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
