import React from "react"
import {Button, Col, Container, Image, Row} from "react-bootstrap";
import podpal from "../assets/PodPal (1).png"
import "./login.css"
import background from "../assets/Podcast-audience.png";

export const login = () => {
    return (
        <>
            <section>
                <Container className="backgroundColor">
                    <div className="background">
                    <Row>
                        <Col className="d-flex flex-column align-items-center">
                            <h1>Just Swipe It</h1>
                            <Image src={podpal} alt="PodPals"/>
                            <Button variant={"danger"} className={"rounded centered"}>Create Account</Button>
                            <h4>Meet friends who like the same Podcasts as you!</h4>
                        </Col>
                    </Row>
                    </div>
                </Container>
            </section>
        </>
    )
}
