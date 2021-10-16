import * as GitHubApi from "./GitHubApi"
// @ponicode
describe("GitHubApi.getRepositories", () => {
    test("0", async () => {
        await GitHubApi.getRepositories("SELECT * FROM Movies WHERE Title=’Jurassic Park’ AND Director='Steven Spielberg';")
    })

    test("1", async () => {
        await GitHubApi.getRepositories("DROP TABLE tmp;")
    })

    test("2", async () => {
        await GitHubApi.getRepositories("UPDATE Projects SET pname = %s WHERE pid = %s")
    })

    test("3", async () => {
        await GitHubApi.getRepositories("DELETE FROM Projects WHERE pid = %s")
    })

    test("4", async () => {
        await GitHubApi.getRepositories("UNLOCK TABLES;")
    })

    test("5", async () => {
        await GitHubApi.getRepositories("")
    })
})

// @ponicode
describe("GitHubApi.getIssues", () => {
    test("0", async () => {
        await GitHubApi.getIssues("", "", Infinity, undefined, undefined, undefined)
    })
})
