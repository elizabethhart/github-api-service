import React from "react";
import { useTranslation } from "react-i18next";
import { Button, Card } from "react-bootstrap";
import { GitHubRepository } from "../../types";

interface DetailProps {
    repository: GitHubRepository;
}

const Detail: React.FC<DetailProps> = ({ repository }) => {
    const { t } = useTranslation();

    return (
        <>
            <h1>{t("details")}</h1>
            <Card style={{ width: "18rem" }}>
                <Card.Body>
                    <Card.Title>{repository.name}</Card.Title>
                    <Card.Text>
                        <p>{repository.description}</p>
                        <p>
                            {repository.open_issues_count} {t("open-issues")}
                        </p>
                    </Card.Text>
                    <Button variant="primary" onClick={() => window.open(repository.html_url)}>
                        {t("view-on-github")}
                    </Button>
                </Card.Body>
            </Card>
        </>
    );
};

export default Detail;
