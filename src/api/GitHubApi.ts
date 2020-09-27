import axios, { AxiosResponse } from "axios";

const baseUrl = "https://api.github.com";

/**
 * Get a specified GitHub repository
 *
 * @param {string} org The organization who owns the repository
 * @param {string} repo The repository name
 */
export const getRepositories = async (search: string): Promise<AxiosResponse> => {
    try {
        const params = {
            q: search
        };

        const response = await axios.get(`${baseUrl}/search/repositories`, { params });

        return response;
    } catch (error) {
        console.log(error);

        return error;
    }
};

/**
 * Get issues from a specified GitHub repository
 *
 * @param {string} organization The organization who owns the repository
 * @param {string} repository The repository name
 * @param {string} state Indicates the state of the issues to return
 * @param {string} sort What to sort results by
 * @param {string} direction The direction of the sort
 */
export const getIssues = async (
    organization: string,
    repository: string,
    perPage: number,
    state?: "open" | "closed" | "all",
    sort?: "created" | "updated" | "comments",
    direction?: "asc" | "desc"
): Promise<AxiosResponse> => {
    const params = {
        per_page: perPage,
        state: state,
        sort: sort,
        direction: direction
    };

    try {
        const response = await axios.get(`${baseUrl}/repos/${organization}/${repository}/issues`, {
            params
        });

        return response;
    } catch (error) {
        console.log(error);

        return error;
    }
};
