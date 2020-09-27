import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { getRepositories, getIssues } from "../GitHubApi";

describe("GitHubApi effects", () => {
    const mock = new MockAdapter(axios);

    test("should make a GET request to https://api.github.com/search/repositories with a param", (done) => {
        const mockResponse = { items: [] };
        const mockRequestUrl = "https://api.github.com/search/repositories";

        mock.onGet(mockRequestUrl).reply(200, mockResponse);

        getRepositories("test").then((response) => {
            expect(response.data).toEqual(mockResponse);
            done();
        });
    });

    test("should make a GET request to https://api.github.com/repos/facebook/react/issues with params", (done) => {
        const mockRequestUrl = "https://api.github.com/repos/facebook/react/issues";

        mock.onGet(mockRequestUrl).reply(200, []);

        getIssues("facebook", "react", 5).then((response) => {
            expect(response.data).toEqual([]);
            done();
        });
    });
});
