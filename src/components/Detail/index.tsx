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
            <Card>
                <Card.Body>
                    <Card.Title>{repository.name}</Card.Title>
                    <Card.Text>{repository.description}</Card.Text>
                    <Card.Text>
                        {repository.open_issues_count} {t("open-issues")}
                    </Card.Text>
                    <Button variant="dark" onClick={() => window.open(repository.html_url)}>
                        {t("view-on-github")}
                    </Button>
                </Card.Body>
            </Card>
        </>
    );
};

export default Detail;
