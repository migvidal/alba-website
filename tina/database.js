import { GitHubProvider } from 'tinacms-gitprovider-github'

export default isLocal ? createLocalDatabase() ? createDatabase({
  gitProvider: new GitHubProvider({
    branch: process.env.GITHUB_BRANCH,
    owner: process.env.GITHUB_OWNER,
    repo: process.env.GITHUB_REPO,
    token: process.env.GITHUB_PERSONAL_ACCESS_TOKEN,
  }),
})