import React from "react";
import {Form, Image} from "react-bootstrap";
import './CreateYourProfile.css'
import {fetchAllPodcasts} from "../store/podcast";
import {useDispatch, useSelector} from "react-redux";

export const CreateYourProfile = () => {


    const dispatch = useDispatch()
    const initialEffects = () => {
        dispatch(fetchAllPodcasts())
    }
    React.useEffect(initialEffects, [dispatch])

    // Render our misquotes constant - before we have our data, render the skeleton.
    // After we have our data, render the full object with our data.
    const podcasts = useSelector((state) => state.podcast ? state.podcast : [])

console.log(podcasts)


    return(
        <>
            <h1 className={"text-center my-md-5"}>Create Your Profile</h1>
            {/*{podcasts.map(podcast => <h2>{podcast.podcastName}</h2>)}*/}

            <section>
                <div className={"d-flex flex-row justify-content-center"}>
                    <div>
                        <Image src="assets/profilePic.png" alt="profilePic" width="250px" height="350px" thumbnail/>
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
                                <Form.Select>
                                    {podcasts.map(podcast => <option>{podcast.podcastGenre}</option>)}
                                </Form.Select>
                                <Form.Select>
                                    {

                                    }
                                </Form.Select>
                                <button type="submit" value="Submit" className="btn btn-primary">Submit</button>
                            </Form.Group>
                        </div>
                    </Form>
                    <button type="submit" value="Submit" className="btn btn-primary">Create Account</button>
                </div>
            </section>
        </>
    )
}