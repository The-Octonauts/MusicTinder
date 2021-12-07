import React from "react";
import {Form, Image} from "react-bootstrap";
import './CreateYourProfile.css'
import {fetchAllPodcasts} from "../../store/podcast";
import {useDispatch, useSelector} from "react-redux";
import * as Yup from "yup";

import {EditProfileForm} from "./EditProfileForm";


export const CreateYourProfile = () => {
    // const {profile} = props
    //
    // const validator = Yup.object().shape({
    //     profilePhoto: Yup.image()
    //         .profilePhoto("must submit photo")
    //         .required('photo is required'),
    //     profileBio: Yup.string()
    //         .required("bio is required")
    //         .min(8, "bio must be at least eight characters")
    //     podcast: Yup.string()
    //         .required("podcasts are required")
    //
    // });



    const dispatch = useDispatch()
    const initialEffects = () => {
        dispatch(fetchAllPodcasts())
    }
    React.useEffect(initialEffects, [dispatch])

    // Render our misquotes constant - before we have our data, render the skeleton.
    // After we have our data, render the full object with our data.
    const podcasts = useSelector((state) => state.podcast ? state.podcast : [])

console.log(podcasts)


const genres = podcasts.map(podcast => podcast.podcastGenre)
    function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
    }
const uniqueGenres = genres.filter(onlyUnique)

    const filterPodcasts = (genre)=>{
        podcasts.filter(podcast=>podcast.podcastGenre === genre)
    }

    // function submitEditedProfile (values, {resetForm, setStatus}) {
    //
    //     const submitCreateProfile = (createProfile) => {
    //
    //         if (values.profilePhoto !== undefined) {
    //             httpConfig.post(`/apis/image-upload/`, values.profilePhoto)
    //                 .then(reply => {
    //                         let {message, type} = reply;
    //
    //                         if (reply.status === 200) {
    //                             submitCreateProfile({...values, profilePhoto:message})
    //                         } else {
    //                             setStatus({message, type});
    //                         }
    //                     }
    //                 );
    //         } else {
    //             submitCreateProfile(values);
    //         }
    //     }
    //
    // }
    //



    return(
        <>
<>
            <EditProfileForm/>
            </>

            <h1 className={"text-center my-md-5"}>Create Your Profile</h1>


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
                                    {uniqueGenres.map(genre => <option>{genre}</option>)}
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
