import React, {useEffect} from "react";

import './CreateYourProfile.css'

import {useDispatch, useSelector} from "react-redux";
import {EditProfileForm} from "./EditProfileForm";

import {fetchProfileByProfileId} from "../../store/profile";









export const CreateYourProfile = () => {
const dispatch=useDispatch()
const profile = useSelector(state => state.profile ? state.profile : null)
const sideEffects = () => {
    dispatch(fetchProfileByProfileId())
}
    useEffect(sideEffects,[])
console.log(profile)
    return (
    <>
        {profile && <EditProfileForm profile={profile}/>}
    </>
    )
}


//         validationSchema: Yup.object({
//             profilePhotoUrl: Yup.string()
//                 .max(15, 'Must be 15 characters or less')
//                 .required('Required'),
//             profileBio: Yup.string()
//                 .max(20, 'Must be 20 characters or less')
//                 .required('Required'),
//             podcastId: Yup.mixed().podcast('must choose favorite podcast').required('Required'),
//         }),
//         onSubmit: values => {
//             alert(JSON.stringify(values, null, 2));
//         },
//     });
//     return (
//
//         <form onSubmit={formik.handleSubmit}>
//             <label htmlFor="profilePhotoUrl">please add photo</label>
//             <field
//                 id="profilePhotoUrl"
//                 name="profilePhotoUrl"
//                 type="text"
//                 onChange={formik.handleChange}
//                 value={formik.values.profilePhotoUrl}
//             />
//
//             <label htmlFor="profileBio">please add bio</label>
//             <field
//                 id="profileBio"
//                 name="profileBio"
//                 type="text"
//                 onChange={formik.handleChange}
//                 value={formik.values.profileBio}
//             />
//
//             <label htmlFor="podcast">please choose favorite podcast</label>
//             <field
//                 id="podcast"
//                 name="podcast"
//                 type="podcast"
//                 onChange={formik.handleChange}
//                 value={formik.values.podcast}
//             />
//
//             <button type="submit">Submit</button>
//         </form>
//
//     );
// };
//
// const [values, setValues] = React.useState({});
//
//
//
// {/* const handleChange = event => {*/}
// {/*    setValues(values => ({*/}
// {/*        profilePhotoUrl: '',*/}
// {/*        profileBio: '',*/}
// {/*        podcastId: '',*/}
// {/*        // we use the name to tell Formik which key of `values` to update*/}
// {/*        [event.target.name]: event.target.value*/}
// {/*    });*/}
// {/*}*/}
//
//
//
// export const CreateYourProfile = () => {
//
//
//     const dispatch = useDispatch()
//     const initialEffects = () => {
//         dispatch(fetchAllPodcasts())
//     }
//     React.useEffect(initialEffects, [dispatch])
//
//     // Render our misquotes constant - before we have our data, render the skeleton.
//     // After we have our data, render the full object with our data.
//     const podcasts = useSelector((state) => state.podcast ? state.podcast : [])
//
//
//
//
//
//
// const genres = podcasts.map(podcast => podcast.podcastGenre)
//     function onlyUnique(value, index, self) {
//         return self.indexOf(value) === index;
//     }
// const uniqueGenres = genres.filter(onlyUnique)
//
//     const filterPodcasts = (genre)=>{
//         podcasts.filter(podcast=>podcast.podcastGenre === genre)
//     }
//
//     // function submitEditedProfile (values, {resetForm, setStatus}) {
//     //
//     //     const submitCreateProfile = (createProfile) => {
//     //
//     //         if (values.profilePhoto !== undefined) {
//     //             httpConfig.post(`/apis/image-upload/`, values.profilePhoto)
//     //                 .then(reply => {
//     //                         let {message, type} = reply;
//     //
//     //                         if (reply.status === 200) {
//     //                             submitCreateProfile({...values, profilePhoto:message})
//     //                         } else {
//     //                             setStatus({message, type});
//     //                         }
//     //                     }
//     //                 );
//     //         } else {
//     //             submitCreateProfile(values);
//     //         }
//     //     }
//     //
//     // }
//     //
//
//
//
//     return(
//         <>
// {/*<Formik>*/}
//             {EditProfileForm}
//
//             <h1 className={"text-center my-md-5"}>Create Your Profile</h1>
//
//
//             <section>
//                 <div className={"d-flex flex-row justify-content-center"}>
//                     <div>
//
//                         <div>
//                             <input type="file"/>
//                             {/*<button>Upload</button>*/}
//                         </div>
//                     </div>
//                     <div className="ms-5">
//                         <Form>
//                             <Form.Group>
//                                 <Form.Label>Bio</Form.Label>
//                                 <Form.Control as="textarea" rows={8} cols={70}/>
//                             </Form.Group>
//                         </Form>
//                     </div>
//                 </div>
//             </section>
//
//
//
//             <section>
//                 <h2 className={"text-center my-md-5"}>Please add your favorite podcasts</h2>
//                 <div class="formSize">
//                     <Form>
//                         <div>
//                             <Form.Group>
//                                 <Form.Label>Genre</Form.Label>
//                                 <Form.Select>
//                                     {uniqueGenres.map(genre => <option>{genre}</option>)}
//                                 </Form.Select>
//                                 <Form.Select>
//                                     {
//
//                                     }
//                                 </Form.Select>
//
//
//                                 <div id="checkbox-group">Checked</div>
//                                 <div role="group" aria-labelledby="checkbox-group">
//                                     <label>
//                                         <Field type="checkbox" name="checked" value="One" />
//                                         One
//                                     </label>
//                                     <label>
//                                         <Field type="checkbox" name="checked" value="Two" />
//                                         Two
//                                     </label>
//                                     <label>
//                                         <Field type="checkbox" name="checked" value="Three" />
//                                         Three
//                                     </label>
//                                 </div>
//
//
//                                 <button type="submit" value="Submit" className="btn btn-primary">Submit</button>
//                             </Form.Group>
//                         </div>
//                     </Form>
//                     <button type="submit" value="Submit" className="btn btn-primary">Create Account</button>
//                 </div>
//             </section>
// {/*</Formik>*/}
//         </>
//     )
// }
