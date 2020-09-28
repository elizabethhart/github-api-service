import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Detail from "../Detail";
import Search from "../Search";
import Issues from "../Issues";
import { GitHubRepository } from "../../types";

/**
 * Main container for all dashboard components
 */
const Main: React.FC = () => {
    const [repository, setRepository] = useState<GitHubRepository | null>(null);

    return (
        <Container fluid>
            <Search
                repository={repository}
                onRepositoryChange={(repository: GitHubRepository) => {
                    setRepository(repository);
                }}
                clearSelection={() => setRepository(null)}
            />
            {repository && (
                <Row>
                    <Col className="repository detail" md={4}>
                        <Detail repository={repository} />
                    </Col>
                    <Col className="repository issues" md={8}>
                        <Issues repository={repository} />
                    </Col>
                </Row>
            )}
        </Container>
    );
};

export default Main;
