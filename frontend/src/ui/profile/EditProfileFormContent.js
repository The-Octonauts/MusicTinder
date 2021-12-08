import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {ImageDropZone} from "../shared/ImageDropZone";
import {Field} from "formik";
import {FormDebugger} from "../../utils/FormDebugger";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllPodcasts} from "../../store/podcast";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";



export const EditProfileFormContent = (props) => {
    const {
        setFieldValue,
        status,
        values,
        errors,
        touched,
        dirty,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset
    } = props;
    console.log(values)







    const dispatch = useDispatch()
    const initialEffects = () => {
        dispatch(fetchAllPodcasts())
    }
    React.useEffect(initialEffects, [dispatch])

    const podcasts = useSelector((state) => state.podcast ? state.podcast : [])



    const genres = podcasts.map(podcast => podcast.podcastGenre)
    function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
    }
    const uniqueGenres = genres.filter(onlyUnique)

    const filterPodcasts = (genre)=>podcasts.filter(podcast=>podcast.podcastGenre === genre)

    uniqueGenres.map(genre => filterPodcasts(genre).map(podcast=>console.log(podcast.podcastName,podcast.podcastGenre, podcast.podcastImage)))
console.log(uniqueGenres)













    return (
        <>

            <form onSubmit={handleSubmit}>




                    <h1>Create Profile!</h1>



                                {/*<div className="form-group">*/}
                                {/*    <label htmlFor="profilePhotoUrl">ProfilePhoto</label>*/}
                                {/*    <div className="input-group">*/}
                                {/*        <div className="input-group-prepend">*/}
                                {/*            <div className="input-group-text">*/}
                                {/*                <FontAwesomeIcon icon="dove"/>*/}
                                {/*            </div>*/}
                                {/*        </div>*/}
                                {/*        <field*/}
                                {/*            className="form-control"*/}
                                {/*            name="profilePhotoUrl"*/}
                                {/*            type="text"*/}
                                {/*            value={values.profilePhotoUrl}*/}
                                {/*            placeholder="place photo"*/}
                                {/*            onChange={handleChange}*/}
                                {/*            onBlur={handleBlur}*/}

                                {/*        />*/}
                                {/*    </div>*/}
                                {/*    {*/}
                                {/*        errors.profilePhotoUrl && touched.profilePhotoUrl && (*/}
                                {/*            <div className="alert alert-danger">*/}
                                {/*                {errors.profilePhotoUrl}*/}
                                {/*            </div>*/}
                                {/*        )*/}
                                {/*    }*/}
                                {/*</div>*/}


                                <ImageDropZone
                                    formikProps={{
                                        values,
                                        handleChange,
                                        handleBlur,
                                        setFieldValue,
                                        fieldValue:"profilePhotoUrl"
                                    }}
                                />





                                <div className="form-group">
                                    <label htmlFor="profileBio">Bio</label>

                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">
                                                <FontAwesomeIcon icon="bio"/>
                                            </div>
                                        </div>
                                        <Field
                                            name="profileBio"
                                            component="textarea"
                                            rows="2"
                                            id="profileBio"
                                            value={values.profileBio}
                                            placeholder="Enter Bio"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />

                                        {/*<field*/}
                                        {/*    className="form-control"*/}
                                        {/*    id="profileBio"*/}
                                        {/*    type="text"*/}
                                        {/*    value={values.profileBio}*/}
                                        {/*    placeholder="Enter Bio"*/}
                                        {/*    onChange={handleChange}*/}
                                        {/*    onBlur={handleBlur}*/}

                                        {/*/>*/}
                                    </div>

                                    {
                                        errors.profileBio && touched.profileBio && (
                                            <div className="alert alert-danger">
                                                {errors.profileBio}
                                            </div>
                                        )

                                    }
                                </div>

                { uniqueGenres &&
<>
    <Container>
                    <div id="my-radio-group">select favorite podcast</div>
                    <div role="group" aria-labelledby="my-radio-group">
                        <Row>

                        {  uniqueGenres.map(genre => filterPodcasts(genre).map(podcast=>
                            <Col md="3">
                            <label>
                                <img src={podcast.podcastImage} alt={podcast.podcastName}/>
                            <Field type="checkbox" name="podcastIds" value={podcast.podcastId} />
                                {podcast.podcastName}
                        </label>
                            </Col>))}
                        </Row>
                    <div>Picked: {values.podcastIds}</div>
                    </div>
    </Container>
</> }
                                <div className="form-group">
                                    <button className="btn btn-primary mb-2" type="submit">Submit</button>
                                    <button
                                        className="btn btn-danger mb-2"
                                        onClick={handleReset}
                                        disabled={!dirty || isSubmitting}
                                    >Reset
                                    </button>
                                </div>
                                <FormDebugger {...props} />
                            </form>








            {
                status && (<div className={status.type}>{status.message}</div>)
            }

        </>


    )
                    };