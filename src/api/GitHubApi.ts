import axios, {AxiosResponse} from "axios";

const baseUrl = "https://api.github.com/repos";

enum State {
    "open",
    "closed",
    "all"
}

enum Sort {
    "created",
    "updated",
    "comments"
}

enum Direction {
    "asc",
    "desc"
}

/**
 * Get issues from a specified GitHub repository
 *
 * @param {string} org The organization who owns the repository
 * @param {string} repo The repository name
 * @param {State} state Indicates the state of the issues to return
 * @param {Sort} sort What to sort results by
 * @param {Direction} direction The direction of the sort
 */
export const getIssues = async (
    org: string,
    repo: string,
    state?: State,
    sort?: Sort,
    direction?: Direction
): Promise<AxiosResponse> => {
    let requestUrl = `${baseUrl}/${org}/${repo}/issues`;

    if (state) {
        requestUrl += `?state=${state}`;
    }

    if (sort) {
        requestUrl += `&sort=${sort}`;

        if (direction) {
            requestUrl += `&direction=${direction}`;
        }
    }

    try {
        const response = await axios.get(requestUrl);

        return response;
    } catch (error) {
        console.log(error);

        return error;
    }
};
