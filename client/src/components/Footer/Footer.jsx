import React from 'react';
import {Container, Jumbotron} from "react-bootstrap";

const Footer = () => {
    return (
        <Jumbotron className="mb-0 align-bottom" fluid>
            <Container>
                <h1>E-School</h1>
                <p>
                    Footer у відпустці.
                </p>
            </Container>
        </Jumbotron>
    );
};

export default Footer;
