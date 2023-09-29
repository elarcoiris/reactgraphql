# Getting Started

Create a .env file with your GITHUB_ACCESS_TOKEN and GITHUB_USERNAME, which are used in this example, within src/db.js:

```js
const accessToken = process.env.GITHUB_ACCESS_TOKEN;
const username = process.env.GITHUB_USERNAME;

const github = {
    baseURL: "https://api.github.com/graphql",
    username,
    headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${accessToken}`
    }
}
export default github
```
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.
