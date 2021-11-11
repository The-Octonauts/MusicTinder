import React, {useState} from "react";
import Carousel from "react-bootstrap/Carousel";
import {Card, Image, ListGroup, ListGroupItem, Row} from "react-bootstrap";
import man from "../assets/stylish-man-2021-09-24-03-15-41-utc.jpg";
import girl1 from "../assets/woman-2021-09-01-13-01-13-utc.JPG";
import girl2 from "../assets/woman-2021-09-01-13-02-54-utc.JPG";

export const ControlledCarousel = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>

                <Card style={{ width: '20rem'}} className="text-white bg-dark">
                    <Card.Img variant="top" src={girl1} className="bg-image"
                         style={{
                         }}/>
                   {/* <Card.Img variant="top" src={girl1} alt="recommendation image" className="img-relative"/>*/}
                    <Card.Body>
                    <Card.ImgOverlay>
                        <Row>
                        <Card.Title className="text-absolute">Kyliee, 21</Card.Title>
                        </Row>
                        <Row>
                        <Card.Text className="text-absolute">
                            Her favorite podcasts are Joe Rogan Experience and Consider This.
                        </Card.Text>
                        </Row>
                    </Card.ImgOverlay>
            </Card.Body>
                    <Card.Body>
                        <ListGroup className="list-group-horizontal">
                            <ListGroupItem>❌</ListGroupItem>
                            <ListGroupItem>💖</ListGroupItem>
                            <ListGroupItem>✅</ListGroupItem>
                        </ListGroup>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                </Card>
            </Carousel.Item>

        </Carousel>
    );
}
