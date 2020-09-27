import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { ListGroup, Spinner } from "react-bootstrap";
import { getIssues } from "../../api/GitHubApi";
import { GitHubIssue, GitHubRepository } from "../../types";

interface IssuesProps {
    repository: GitHubRepository | null;
}

const Issues: React.FC<IssuesProps> = ({ repository }) => {
    const { t } = useTranslation();
    const [issues, setIssues] = useState<GitHubIssue[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        findIssues();
    }, [repository]);

    function findIssues() {
        if (repository) {
            setIsLoading(true);
            getIssues(repository.owner.login, repository.name, 100, "all", "updated", "desc").then(
                (response) => {
                    console.log("response", response);
                    if (response.data && response.data.length) {
                        setIssues(response.data);
                    }
                    setIsLoading(false);
                }
            );
        }
    }

    return (
        <>
            <h1>{t("recent-issues")}</h1>
            {isLoading ? (
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            ) : (
                <ListGroup>
                    {issues.map((issue, index) => {
                        return (
                            <ListGroup.Item key={index} onClick={() => window.open(issue.html_url)}>
                                {issue.title}
                            </ListGroup.Item>
                        );
                    })}
                </ListGroup>
            )}
        </>
    );
};

export default Issues;
