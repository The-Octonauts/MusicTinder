import React from "react";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container'
import { PostCard } from './PostCard'
import {useDispatch, useSelector} from "react-redux";
import {PostForm} from "./PostForm";
import {fetchAllPodcasts} from "../../store/podcast";

export const Posts = () => {

    // Tell this component that it needs to watch for items that live outside of this component.
    // This is how we make sure this component looks for our data from Redux's call to the backend.
    const dispatch = useDispatch()
    const initialEffects = () => {
        dispatch(fetchAllPodcasts())
    }
    React.useEffect(initialEffects, [dispatch])

    // Render our misquotes - before we have our data, render the skeleton.
    // After we have our data, render the full object with our data.
    const podcasts = useSelector((state) => state.podcasts ? state.podcasts : [])

    console.log(podcasts)

    return (
        <>
            <main className="my-5">
                <Container fluid="true" className="text-center text-sm-left">

                    <Row className=" mb-3">
                        <Col>
                            <h1>Meow Forum</h1>
                        </Col>
                    </Row>

                    <Row>
                        <Col sm={4} >
                            <Card bg="shadow-light" className="border-0 rounded-6 col" >
                                <Card.Body>
                                    <Card bg="shadow-light" className="border-0 rounded-6 col" >
                                        <Card.Body>
                                            <PostForm />
                                        </Card.Body>
                                    </Card>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <CardColumns className="p-4">
                            {podcasts.map(podcast => <PostCard key={podcast.podcastId} podcast={podcast} />)}
                        </CardColumns>
                    </Row>

                </Container>
            </main>
        </>
    )
};