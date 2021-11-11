import React, {useState} from "react"
import {Button, Card, Col, Container, Image, Nav, Row} from "react-bootstrap";
import {ControlledCarousel} from "./ControlledCarousel";
import podpal from "../assets/PodPal.png";
import "./recommend.css";


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
                                        <Nav.Link href="#first">Matches</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link href="#link">Messages</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Card.Header>
                            <Card.Body>
                                <Card.Title>Start Matching</Card.Title>
                                <Card.Text className="p-5">
                                    Matches will appear here once you start to Like people.  You can message them directly from here when you're ready to spark up the conversation.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>



                    </Col>
                    <Col>
                        <ControlledCarousel/>
                    </Col>

                </Row>
            </Container>
        </>
    )
};

