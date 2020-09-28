interface GitHubOwner {
    login: string;
    // populate types as needed
}

interface GitHubUser {
    id: number;
    // populate types as needed
}

interface PullRequest {
    id: number;
    // populate types as needed
}

interface Label {
    id: number;
    name: string;
    color: string;
    // populate types as needed
}

export interface GitHubIssue {
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

export interface GitHubRepository {
    id: number;
    full_name: string;
    name: string;
    description: string;
    url: string;
    html_url: string;
    open_issues_count: number;
    owner: GitHubOwner;
    // add types as needed
}
