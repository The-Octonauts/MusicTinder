import React, {useState} from "react";
import Carousel from "react-bootstrap/Carousel";
import {Card, Image, ListGroup, ListGroupItem} from "react-bootstrap";
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
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={girl1}/>
                    <Card.Body>
                        <Card.Title>Kyliee, 21</Card.Title>
                        <Card.Text>
                            Her favorite podcasts are Joe Rogan Experience and Consider This.
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-horizontal">
                        <ListGroupItem>❌</ListGroupItem>
                        <ListGroupItem>💖</ListGroupItem>
                        <ListGroupItem>✅</ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                </Card>

            </Carousel.Item>

        </Carousel>
    );
}
