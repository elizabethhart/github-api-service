import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Badge, Card, Col, ListGroup, Row, Spinner } from "react-bootstrap";
import { Cell, Pie, PieChart } from "recharts";
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
        void refreshIssues();
    }, [repository]);

    const refreshIssues = async () => {
        try {
            if (repository) {
                const response = await getIssues(
                    repository.owner.login,
                    repository.name,
                    100,
                    "all",
                    "created",
                    "desc"
                );
                const newIssues = response.data && response.data.length ? response.data : [];
                setIssues(newIssues);
                setIsLoading(false);
            } else {
                setIssues([]);
            }
        } catch (error) {
            setIssues([]);
            setIsLoading(false);
            console.log(error);
        }
    };

    /**
     * TODO: Add data visualization for contributors over time
     */
    const buildChartData = () => {
        return [
            {
                name: t("open"),
                value: issues.filter((issue) => issue.state === "open").length,
                fill: "#808080"
            },
            {
                name: t("closed"),
                value: issues.filter((issue) => issue.state === "closed").length,
                fill: "#000000"
            }
        ];
    };

    return (
        <>
            <h1>{t("recent-issues")}</h1>
            {isLoading ? (
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            ) : issues.length > 0 ? (
                <Row>
                    <Col>
                        <Card>
                            <PieChart width={250} height={250}>
                                <Pie
                                    data={buildChartData()}
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={50}
                                    dataKey="value"
                                    label={(entry) => entry.name}
                                >
                                    {buildChartData().map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.fill} />
                                    ))}
                                </Pie>
                            </PieChart>
                        </Card>
                    </Col>
                    <Col>
                        <ListGroup>
                            {issues.map((issue, index) => {
                                return (
                                    <ListGroup.Item
                                        key={index}
                                        onClick={() => window.open(issue.html_url)}
                                    >
                                        {issue.title}
                                        {issue.labels.map((label, labelIndex) => {
                                            // TODO: Enforce max labels per line
                                            return (
                                                <Badge pill variant="dark" key={labelIndex}>
                                                    {label.name}
                                                </Badge>
                                            );
                                        })}
                                    </ListGroup.Item>
                                );
                            })}
                        </ListGroup>
                    </Col>
                </Row>
            ) : (
                <span>no open issues</span>
            )}
        </>
    );
};

export default Issues;
