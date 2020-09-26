import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Issues from "../Issues";
import Releases from "../Releases";
import Contributors from "../Contributors";
import Pulls from "../Pulls";

const Main: React.FC = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <Issues />
                </Col>
                <Col>
                    <Releases />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Contributors />
                </Col>
                <Col>
                    <Pulls />
                </Col>
            </Row>
        </Container>
    );
};

export default Main;
