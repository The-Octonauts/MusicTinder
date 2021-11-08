import React from "react";
import {Col, Form, Image, Row} from "react-bootstrap";

export const CreateYourProfile = () => {
    return(
        <>
            <h1>Create Your Profile</h1>

            <section>
                <div className={"d-flex flex-row justify-content-center"}>
                    <div>
                        <Image src="assests/profilePic.png" alt="profilePic" width="250px" height="350px" thumbnail/>
                    </div>
                    <div className="ms-5">
                        <Form>
                            <Form.Group>
                                <Form.Label>Bio</Form.Label>
                                <Form.Control as="textarea" rows={8} cols={70}/>
                            </Form.Group>
                        </Form>
                    </div>
                </div>
            </section>

            <section>
                <h2>Please add your favorite podcasts</h2>
                <div>
                    <Form>
                        <Row>
                            <Form.Group>
                                <Form.Label>Genre</Form.Label>
                                <Form.Select defaultValue="Choose">
                                    <option>Choose*</option>
                                    <option>Comedy</option>
                                    <option>News</option>
                                    <option>True Crime</option>
                                    <option>Sport</option>
                                    <option>Health/Fitness</option>
                                </Form.Select>
                            </Form.Group>
                            {/*Comedy Podcasts*/}
                            <Form.Group>
                                <Form.Label>Podcasts</Form.Label>
                                <Form.Select defaultValue="Choose">
                                    <option>Choose*</option>
                                    <option>The Joe Rogan Experience</option>
                                    <option>Banter with Sapnap and Karl Jacobs</option>
                                    <option>Morbid: A True Crime Podcast</option>
                                    <option>Call Her Daddy</option>
                                    <option>Armchair Expert Umbrella with Dax Shepard</option>
                                </Form.Select>
                            </Form.Group>
                            {/*News*/}
                            <Form.Group>
                                <Form.Label>Podcasts</Form.Label>
                                <Form.Select defaultValue="Choose">
                                    <option>Choose*</option>
                                    <option>The Ben Shapiro Show</option>
                                    <option>The Daily</option>
                                    <option>NPR Up First</option>
                                    <option>Breaking Points with Krystal and Saagar</option>
                                    <option>Morning Wire</option>
                                </Form.Select>
                            </Form.Group>
                            {/*True Crime*/}
                            <Form.Group>
                                <Form.Label>Podcasts</Form.Label>
                                <Form.Select defaultValue="Choose">
                                    <option>Choose*</option>
                                    <option>Bruh Issa Murder</option>
                                    <option>Wine & Crime</option>
                                    <option>Bear Brook</option>
                                    <option>Morbid: A True Crime Podcast</option>
                                    <option>The Murder in My Family</option>
                                </Form.Select>
                            </Form.Group>
                            {/*Sport*/}
                            <Form.Group>
                                <Form.Label>Podcasts</Form.Label>
                                <Form.Select defaultValue="Choose">
                                    <option>Choose*</option>
                                    <option>Pardon My Take</option>
                                    <option>The Bill Simmons Podcast</option>
                                    <option>The Rumor</option>
                                    <option>The Pat McAfee Show 2.0</option>
                                    <option>The Dan Le Batard Show with Stugotz</option>
                                </Form.Select>
                            </Form.Group>
                            {/*Health/Fitness*/}
                            <Form.Group>
                                <Form.Label>Podcasts</Form.Label>
                                <Form.Select defaultValue="Choose">
                                    <option>Choose*</option>
                                    <option>Mind Pump</option>
                                    <option>Sika Strength </option>
                                    <option>Ben Greenfield Fitness</option>
                                    <option>The Drive with Peter Attia</option>
                                    <option>The Doctor’s Farmacy</option>
                                </Form.Select>
                            </Form.Group>
                        </Row>
                    </Form>
                </div>
            </section>
        </>
    )
}