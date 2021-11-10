import React, {useState} from "react"
import {Col, Container, Image, Row} from "react-bootstrap";
import {ControlledCarousel} from "./ControlledCarousel";
import podpal from "../assets/PodPal.png"


export const Recommend = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col xs={3} md={4}>
                        <img src={podpal} fluid/>
                        <h1>Recommendations For You!</h1>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} md={4}>
                        <ControlledCarousel/>
                    </Col>
                </Row>
            </Container>
        </>
    )
};

