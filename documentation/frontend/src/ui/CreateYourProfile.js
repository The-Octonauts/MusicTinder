import React from "react";
import {Form, Image} from "react-bootstrap";
import './CreateYourProfile.css'

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

    // state = {
    //     selectedFile: null
    // }
    //
    // fileSelectedHandler = event => {
    //     this.setState({
    //         selectedFile: event.target.files[0]
    //     })
    // }
    //
    // fileUploadHandler = () => {
    //
    // }


    return(
        <>
            <h1 className={"text-center my-md-5"}>Create Your Profile</h1>

            <section>
                <div className={"d-flex flex-row justify-content-center"}>
                    <div>
                        <Image src="assests/profilePic.png" alt="profilePic" width="250px" height="350px" thumbnail/>
                        <div>
                            <input type="file"/>
                            <button>Upload</button>
                        </div>
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
                <h2 className={"text-center my-md-5"}>Please add your favorite podcasts</h2>
                <div class="formSize">
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
                                <Form.Select>
                                    {
                                        options
                                    }
                                </Form.Select>
                                <button type="submit" value="Submit" className="btn btn-primary">Submit</button>
                            </Form.Group>
                        </div>
                    </Form>
                </div>
            </section>
        </>
    )
}