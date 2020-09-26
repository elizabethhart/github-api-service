import React, { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import { getIssues } from "../../api/GitHubApi";

interface GitHubUser {
    id: number;
    // populate type as needed
}

interface PullRequest {
    id: number;
    // populate types as needed
}

interface Label {
    id: number;
    // populate types as needed
}

interface GitHubIssue {
    active_lock_reason: null;
    assignee: GitHubUser;
    assignees: GitHubUser[];
    author_association: string;
    body: string;
    closed_at: null;
    comments: number;
    comments_url: string;
    created_at: string;
    events_url: string;
    html_url: string;
    id: number;
    labels: Label[];
    labels_url: string;
    locked: boolean;
    milestone: null;
    node_id: string;
    number: number;
    performed_via_github_app: null;
    pull_request: PullRequest;
    repository_url: string;
    state: string;
    title: string;
    updated_at: string;
    url: string;
    user: GitHubUser;
}

const Issues: React.FC = () => {
    const [issues, setIssues] = useState<GitHubIssue[]>([]);

    useEffect(() => {
        getReactIssues();
    }, []);

    function getReactIssues() {
        getIssues("facebook", "react", 5, "all", "updated", "desc").then((response) => {
            if (response.data && response.data.length) {
                setIssues(response.data);
            }
        });
    }

    return (
        <>
            <h1>Issues</h1>
            <ListGroup>
                {issues.map((issue, index) => {
                    return <ListGroup.Item key={index}>{issue.title}</ListGroup.Item>;
                })}
            </ListGroup>
        </>
    );
};

export default Issues;
