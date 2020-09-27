import axios, { AxiosResponse } from "axios";

const baseUrl = "https://api.github.com";

/**
 * Search all GitHub repositories
 * see: https://docs.github.com/en/free-pro-team@latest/rest/reference/search#search-repositories
 *
 * @param {string} search The query string
 */
export const getRepositories = async (search: string): Promise<AxiosResponse> => {
    try {
        const params = {
            q: search
        };

        const response = await axios.get(`${baseUrl}/search/repositories`, {
            params
            // Use github token to increase rate limits from 10 requests/min -> 30 requests/min
            // headers: {
            //     Authorization: `token ${token}`
            // }
        });

        return response;
    } catch (error) {
        // TODO: Display error notification to user
        console.log(error);

        return error;
    }
};

/**
 * Get issues from a specified GitHub repository
 * see: https://docs.github.com/en/free-pro-team@latest/rest/reference/issues#list-repository-issues
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
            // Use github token to increase rate limits from 60 requests/hr -> 5000 requests/hr
            // headers: {
            //     Authorization: `token ${token}`
            // }
        });

        return response;
    } catch (error) {
        // TODO: Display error notification to user
        console.log(error);

        return error;
    }
};
