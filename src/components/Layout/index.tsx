import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Issues from "../Issues";

const Layout: React.FC = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <Issues />
                </Col>
            </Row>
        </Container>
    );
};

export default Layout;
