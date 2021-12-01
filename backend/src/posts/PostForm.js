import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Button from "react-bootstrap/Button";
import {Formik} from "formik";
import {httpConfig} from "../../utils/httpConfig";
import {useDispatch} from "react-redux";
import {fetchAllPodcast} from "../../store/podcast";
import * as Yup from "yup"
import {FormDebugger} from "../../utils/FormDebugger";



export function PostForm() {

    const dispatch = useDispatch()

    const validator = Yup.object().shape({
        podcastAttribution: Yup.string()
            .required("A misquote attribution is required to create a misquote")
            .max(64, "misquote attribution cannot be over 64 characters "),
        podcastContent: Yup.string()
            .required(" misquote content is required to create a misquote")
            .max(255, "misquote content cannot be over 255 characters "),
        podcastSubmitter: Yup.string()
            .required("Please specify who is submitting this misquote")
            .max(64, "misquote submitter cannot be over 64 characters "),

    })

    const handleSubmit = (values, {resetForm, setStatus}) => {
        httpConfig.post("/apis/podcast/", values).then(reply => {
            const {message, type, status} = reply
            if (status === 200) {
                resetForm()
                dispatch(fetchAllpodcast())
            }
            setStatus({message, type})
        })
    }

    const podcast = {
        podcastAttribution: "",
        podcastContent: "",
        podcastSubmitter: ""
    }

    return (
        <>
            <Formik
                onSubmit={handleSubmit}
                initialValues={podcast}
                validationSchema={validator}
            >
                {PostFormContent}
            </Formik>
        </>
    )
}


function PostFormContent(props) {
    const {
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
    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <InputGroup>
                        <FormControl
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Attribution"
                            value={values.podcastAttribution}
                            name="podcastAttribution"
                        />
                    </InputGroup>
                    {errors.podcastAttribution && touched.podcastAttribution && <>
                        <div className="alert alert-danger">
                            {errors.podcastAttribution}
                        </div>
                    </>}
                </Form.Group>

                <Form.Group>
                    <InputGroup>
                        <FormControl
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Submitter"
                            value={values.podcastSubmitter}
                            name="misquoteSubmitter"
                        />

                    </InputGroup>
                    {errors.podcastSubmitter && touched.podcastSubmitter && <>
                        <div className="alert alert-danger">
                            {errors.podcastSubmitter}
                        </div>
                    </>}
                </Form.Group>

                <Form.Group>
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text>
                                <FontAwesomeIcon icon="dog"/>
                            </InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            as="textarea"
                            placeholder="Meow Meow Goes Here"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.podcastContent}
                            name="podcastContent"
                        />

                        <InputGroup.Append>
                            <Button variant="primary" type="submit"> Submit <FontAwesomeIcon
                                icon="envelope"/></Button>
                        </InputGroup.Append>
                    </InputGroup>
                    {errors.podcastContent && touched.podcastContent && <>
                        <div className="alert alert-danger">
                            {errors.podcastContent}
                        </div>
                    </>}
                </Form.Group>
                {/*<FormDebugger {...props} />*/}
            </Form>
            {
                status && (<div className={status.type}>{status.message}</div>)
            }
        </>
    )
}
