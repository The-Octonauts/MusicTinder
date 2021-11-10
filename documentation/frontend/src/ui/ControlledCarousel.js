import React, {useState} from "react";
import Carousel from "react-bootstrap/Carousel";
import {Image} from "react-bootstrap";
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
                <Image
                    className="d-block w-100"
                    src={man}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image
                    className="d-block w-100"
                    src={girl1}
                    alt="Second slide"
                    fluid
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image
                    className="d-block w-100"
                    src={girl2}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}
