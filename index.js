require('dotenv').config()

const express = require('express')
const app = express()
const port = 4000

const githubData = {
    "login": "indresh-007",
    "id": 140510462,
    "node_id": "U_kgDOCGAE_g",
    "avatar_url": "https://avatars.githubusercontent.com/u/140510462?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/indresh-007",
    "html_url": "https://github.com/indresh-007",
    "followers_url": "https://api.github.com/users/indresh-007/followers",
    "following_url": "https://api.github.com/users/indresh-007/following{/other_user}",
    "gists_url": "https://api.github.com/users/indresh-007/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/indresh-007/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/indresh-007/subscriptions",
    "organizations_url": "https://api.github.com/users/indresh-007/orgs",
    "repos_url": "https://api.github.com/users/indresh-007/repos",
    "events_url": "https://api.github.com/users/indresh-007/events{/privacy}",
    "received_events_url": "https://api.github.com/users/indresh-007/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Indresh Dwivedi",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 9,
    "public_gists": 0,
    "followers": 1,
    "following": 1,
    "created_at": "2023-07-25T11:31:46Z",
    "updated_at": "2024-04-03T08:53:04Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('indreshdotcom')
})

app.get('/login', (req, res) => {
    res.send('<h1>please login at chai aur code</h1>')
})

app.get('/youtube', (req, res) => {
    res.send('<h2>Chai aur Code</h2>')
})

app.get('/github', (req, res) => {
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})

