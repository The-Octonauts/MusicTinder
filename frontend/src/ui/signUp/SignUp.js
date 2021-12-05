import React, {useState, useEffect} from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {LinkContainer} from "react-router-bootstrap"
import {SignUpModal} from "../signUp/signUpModal";
import {Container} from "react-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchAuth} from "../../store/auth";



export const SignUp = (props) => {

    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch()
    const effects = () => {
        dispatch(fetchAuth());
    };
    const inputs = [];
    useEffect(effects, inputs);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // isModalOpen prevents the sign in modal being removed from the dom before the
    // sign-in modal is closed by the user
    const isModalOpen = ()=> {
        if(!auth) {
            return !auth
        } else if(show === true && auth  ) {
            return true
        }
    }
    return(
        <Navbar bg="primary" variant="dark">
            <Container>
                    {isModalOpen()  &&  (
                        <>
                            <SignUpModal/>
                        </>
                    )}
            </Container>
        </Navbar>
    )
};
