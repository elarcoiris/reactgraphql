const accessToken = process.env.GITHUB_ACCESS_TOKEN ?? "";
const username = process.env.GITHUB_USERNAME ?? "";

const github = {
    baseURL: "https://api.github.com/graphql",
    username,
    headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${accessToken}`
    }
}
export default github;