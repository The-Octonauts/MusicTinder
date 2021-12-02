import React from 'react'
import {FormDebugger} from '../../utils/FormDebugger'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export const signUpFormContent = (props) => {
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
                {}
                <div className="form-group">
                    <label htmlFor="profileEmail"> Email Address</label>
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
                                placeholder="Enter Email"
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
                    <label htmlFor="profilePasswordPassword">Password</label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <FontAwesomeIcon icon="passport"/>.
                            </div>
                            <input
                                className="form-control"
                                   name="profilePassword"
                                   type="text"
                                   value={values.profilePassword}
                                   placeholder="password"
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                />

                        </div>
                    </div>
                </div>
            </form> </>
    )
}