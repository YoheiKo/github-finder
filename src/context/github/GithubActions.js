import axios from "axios";
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const github = axios.create({
  baseURL: `${GITHUB_URL}`,
  headers: {
    Authorization: `token ${GITHUB_TOKEN}`,
  },
});

export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  });
  const response = await github.get(`/search/users?${params}`);
  const items = response.data.items;

  return items;
};

// Get user and repos. This is not used
export const getUserAndRepos = async (login) => {
  const params = new URLSearchParams({
    sort: "created",
    per_page: 10,
  });
  const [user, repos] = await Promise.all([
    github.get(`/users/${login}`),
    github.get(`/users/${login}/repos?${params}`),
  ]);
  return { user: user.data, repos: repos.data };
};

export const getUser = async (login) => {
  try {
    const response = await github.get(`/users/${login}`);
    const data = response.data;
    return data;
  } catch (error) {
    if (error.response.status === 404) {
      window.location = "/notfound";
    }
    console.log(error);
  }
};

// Get user Repos
export const getUserRepos = async (login) => {
  const params = new URLSearchParams({
    sort: "created",
    per_page: 10,
  });

  const response = await github.get(`/users/${login}/repos?${params}`);
  const data = response.data;
  return data;
};
