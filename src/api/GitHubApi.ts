import axios, { AxiosResponse } from "axios";

const baseUrl = "https://api.github.com/repos";

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
    state?: "open" | "closed" | "all",
    sort?: "created" | "updated" | "comments",
    direction?: "asc" | "desc"
): Promise<AxiosResponse> => {
    const params = {
        state: state,
        sort: sort,
        direction: direction
    };

    try {
        const response = await axios.get(`${baseUrl}/${org}/${repo}/issues`, { params });

        return response;
    } catch (error) {
        console.log(error);

        return error;
    }
};
