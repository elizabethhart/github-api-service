import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { ListGroup } from "react-bootstrap";
import { getIssues } from "../../api/GitHubApi";
import { GitHubIssue, GitHubRepository } from "../../types";

interface IssuesProps {
    repository: GitHubRepository | null;
}

const Issues: React.FC<IssuesProps> = ({ repository }) => {
    const { t } = useTranslation();
    const [issues, setIssues] = useState<GitHubIssue[]>([]);

    useEffect(() => {
        if (repository) {
            findIssues();
        }
    }, [repository]);

    function findIssues() {
        getIssues(repository.owner.login, repository.name, 5, "all", "updated", "desc").then(
            (response) => {
                if (response.data && response.data.length) {
                    console.log(response.data);
                    setIssues(response.data);
                }
            }
        );
    }

    return (
        <>
            <h1>{t("recent-issues")}</h1>
            <ListGroup>
                {issues.map((issue, index) => {
                    return (
                        <ListGroup.Item key={index} onClick={() => window.open(issue.html_url)}>
                            {issue.title}
                        </ListGroup.Item>
                    );
                })}
            </ListGroup>
        </>
    );
};

export default Issues;
