import axios from "axios";
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export async function searchUsers(term) {
  const params = new URLSearchParams({
    q: term
  })

  const response = await axios.get(`${GITHUB_URL}/search/users?${params}`, {
    headers: {
      'Authorization': `token ${GITHUB_TOKEN}`
    }
  })
  return response.data.items
}

export async function getUser(login) {

  const response = await axios.get(`${GITHUB_URL}/users/${login}`, {
    headers: {
      'Authorization': `token ${GITHUB_TOKEN}`
    }
  })

  if(response.status === 404) {
    window.location = '/notfound'
  } else {
    return response.data;
  }
}

export async function getUserRepos(login) {

  const response = await axios.get(`${GITHUB_URL}/users/${login}/repos`, {
    headers: {
      'Authorization': `token ${GITHUB_TOKEN}`
    }
  })

  if(response.status === 404) {
    window.location = '/notfound'
  } else {
   return response.data;
  }
}