import React, {useState} from "react"
import { Col, Card, Button, Container, Image, Nav, Row} from "react-bootstrap";
import {PodpalCards} from "./PodpalCards";
import podpal from "../assets/PodPal.png";
import "./recommend.css";
import "./PodpalCards"
import {SwipeButtons} from "./SwipeButtons";


export const Recommend = () => {
    return (
        <>
            <Container>
                <Row className="mt-5">
                    <Col>
                        <Card>
                            <Card.Header className="cardHeader">
                                <Nav variant="pills" defaultActiveKey="#first">
                                    <Nav.Item>
                                        <Nav.Link href="#first" className="text-white">Matches</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link href="#link" className="text-white">Messages</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Card.Header>
                            <Card.Body>
                                <Card.Title>Start Matching</Card.Title>
                                <Container>
                                    <Row>
                                        <Col c> <img src={podpal} alt=" place holder"/>   </Col>
                                        <Col> <h1>User Name </h1> <h4>BIO</h4> <p> quick example text to build on the card title and make up the bulk of
                                            the card's content. </p> </Col>
                                        <Col> <Button  variant="primary">Send Msg!</Button> </Col>
                                    </Row>
                                </Container>
                                <Card.Text className="p-5">
                                    Matches will appear here once you start to Like people.  You can message them directly from here when you're ready to spark up the conversation.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>



                    </Col>
                    <Col>
                        <PodpalCards/>
                        <SwipeButtons/>
                    </Col>

                </Row>
            </Container>
        </>
    )
};

