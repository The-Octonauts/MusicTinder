import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Image} from "react-bootstrap";

export function ImageDropZone({formikProps, profilePicture}) {

    const onDrop = useCallback(acceptedFiles => {

        const formData = new FormData();
        formData.append('image', acceptedFiles[0]);


        formikProps.setFieldValue(formikProps.fieldValue, formData)

    }, [formikProps]);
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});


    return (
        <div className="form-group" {...getRootProps()}>
            <div className="input-group input-group-lg">
                <Row>
                    <Col xs={3}>
                <Image fluid src={profilePicture} alt="profile picture" />
                <input
                    className="form-control-file"
                    accept="image/*"
                    onChange={formikProps.handleChange}
                    onBlur={formikProps.handleBlur}
                    {...getInputProps()}
                />
                {
                    isDragActive ?
                        <p>Drop the files here ...</p> :
                        <p>Drag 'n' drop some files here, or click to select files</p>
                }
                    </Col>
                </Row>
            </div>
        </div>
    )
}