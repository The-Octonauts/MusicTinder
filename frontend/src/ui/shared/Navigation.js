import  React from "react"
import {Container, Nav, Navbar} from "react-bootstrap";
import podpal from "../../assets/Podpal_navbar.png"


export function Navigation (){
    return(
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="light">
            <Container fluid>
                <Navbar.Brand href="/home">   <img
                    src={podpal}
                    width="120"
                    height="60"
                    alt="Pod Pal logo"
                /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse>
                    <Nav className="me-auto "> </Nav>

                    <Nav>
                        <Nav.Link href="/about" >Home</Nav.Link>
                        <Nav.Link href="/CreateYourProfile" >Sign-In</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}