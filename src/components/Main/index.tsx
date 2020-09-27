import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Detail from "../Detail";
import Search from "../Search";
import Issues from "../Issues";
import { GitHubRepository } from "../../types";

const Main: React.FC = () => {
    const [repository, setRepository] = useState<GitHubRepository | null>(null);

    return (
        <Container>
            <Search
                repository={repository}
                onRepositoryChange={(repository: GitHubRepository) => setRepository(repository)}
                clearSelection={() => setRepository(null)}
            />
            {repository && (
                <Row>
                    <Col>
                        <Detail repository={repository} />
                    </Col>
                    <Col>
                        <Issues repository={repository} />
                    </Col>
                </Row>
            )}
        </Container>
    );
};

export default Main;
