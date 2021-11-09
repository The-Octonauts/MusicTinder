import React from "react";
import {Col, Form, Image, Row} from "react-bootstrap";

export const CreateYourProfile = () => {
    const [selected, setSelected] = React.useState("");
    const changeSelectOptionHandler = (event) => {
        setSelected(event.target.value);
    };
    const comedy = [
        "The Joe Rogan Experience",
        "Banter with Sapnap and Karl Jacobs",
        "Morbid: A True Crime Podcast",
        "Call Her Daddy",
        "Armchair Expert Umbrella with Dax Shepard"
    ];
    const news = [
        "The Ben Shapiro Show",
        "The Daily",
        "NPR Up First",
        "Breaking Points with Krystal and Saagar",
        "Morning Wire",
    ];
    const trueCrime = [
        "Bruh Issa Murder",
        "Wine & Crime",
        "Bear Brook",
        "Morbid: A True Crime Podcast",
        "A Murder in My Family",
    ];
    const sport = [
        "Pardon My Take",
        "The Bill Simmons Podcast",
        "The Rumor",
        "The Pat McAfee Show 2.0",
        "The Dan le Batard Show with Stugotz",
    ];
    const health = [
        "Mind Pump",
        "Sika Strength",
        "Ben Greenfield Fitness",
        "The Drive with Peter Attia",
        "The Doctors Farmacy",
    ];

    let type = null;
    let options = null;

    if (selected === "Comedy") {
        type = comedy;
    } else if (selected === "News"){
        type = news;
    } else if (selected === "True Crime") {
        type = trueCrime;
    }else if (selected === "Sports") {
        type = sport;
    } else if (selected === "Health/Fitness") {
        type = health
    }

    if (type) {
        options = type.map((el) => <option key={el}>{el}</option>);
    }

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
                        <div>
                            <Form.Group>
                                <Form.Label>Genre</Form.Label>
                                <Form.Select onChange={changeSelectOptionHandler}>
                                    <option>Choose</option>
                                    <option>Comedy</option>
                                    <option>News</option>
                                    <option>True Crime</option>
                                    <option>Sports</option>
                                    <option>Health/Fitness</option>
                                </Form.Select>
                            </Form.Group>
                        </div>
                        <div>
                            <Form.Select>
                                {
                                    options
                                }
                            </Form.Select>
                        </div>
                    </Form>
                </div>
            </section>
        </>
    )
}