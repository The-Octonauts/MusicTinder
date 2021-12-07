import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {ImageDropZone} from "../shared/ImageDropZone";


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

    return (
        <>
            <form onSubmit={handleSubmit}>
                {/*controlId must match what is passed to the initialValues prop*/}
                <div className="form-group">
                    <label htmlFor="profileEmail">Email Address</label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <FontAwesomeIcon icon="envelope"/>
                            </div>
                        </div>
                        <input
                            className="form-control"
                            name="profileEmail"
                            type="email"
                            value={values.profileEmail}
                            placeholder="Enter email"
                            onChange={handleChange}
                            onBlur={handleBlur}

                        />
                    </div>
                    {
                        errors.profileEmail && touched.profileEmail && (
                            <div className="alert alert-danger">
                                {errors.profileEmail}
                            </div>
                        )
                    }
                </div>

                <div className="form-group">
                    <label htmlFor="profilePhotUrl">ProfilePhoto</label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <FontAwesomeIcon icon="dove"/>
                            </div>
                        </div>
                        <input
                            className="form-control"
                            name="profilePhotoUrl"
                            type="text"
                            value={values.profilePhotoUrl}
                            placeholder="place photo"
                            onChange={handleChange}
                            onBlur={handleBlur}

                        />
                    </div>
                    {
                        errors.profilePhotoUrl && touched.profilePhotoUrl && (
                            <div className="alert alert-danger">
                                {errors.profilePhotoUrl}
                            </div>
                        )
                    }
                </div>

                {<ImageDropZone
                    formikProps={{
                        values,
                        handleChange,
                        handleBlur,
                        setFieldValue,
                        fieldValue:"profilePhotoUrl"
                    }}

                <div className="form-group">
                    <label htmlFor="profileBio">Bio</label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <FontAwesomeIcon icon="bio"/>
                            </div>
                        </div>
                        <input
                            className="form-control"
                            id="profileBio"
                            type="text"
                            value={values.profileBio}
                            placeholder="Enter Bio"
                            onChange={handleChange}
                            onBlur={handleBlur}

                        />
                    </div>

                    {
                        errors.profileBio && touched.profileBio && (
                            <div className="alert alert-danger">
                                {errors.profileBio}
                            </div>
                        )

                    }
                </div>



                />
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