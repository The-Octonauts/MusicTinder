import React from "react";
import {Container} from "react-bootstrap";

export function Footer () {
    return(
        <footer id="sticky-footer" className="flex-shrink-0 py-4 bg-dark text-white-50">
            <Container fluid={'true'} className={'text-white bg-dark p-5'}>
                <p className={'text-center'}> PodPal copyright 2021</p>
            </Container>
        </footer>

    )

}