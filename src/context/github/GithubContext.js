import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { createRenderer } from "react-dom/test-utils";

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    loading: false,
    repos: [],
  };
  // dispath is equivalent to setUsers and setLoading
  const [state, dispatch] = useReducer(githubReducer, initialState);

  // Get initial users for testing purposes
  // const fetchUsers = async () => {
  //   setLoading();
  //   const response = await axios.get(`${GITHUB_URL}/users`, {
  //     headers: {
  //       Authorization: `token ${GITHUB_TOKEN}`,
  //     },
  //   });
  //   const data = response.data;

  //   dispatch({
  //     type: "GET_USERS",
  //     payload: data,
  //   });
  //   // setUsers(data);
  //   // setLoading(false);
  // };

  // Get initial users for testing purposes
  // const searchUsers = async (text) => {
  //   setLoading();
  //   const params = new URLSearchParams({
  //     q: text,
  //   });
  //   const response = await axios.get(`${GITHUB_URL}/search/users?${params}`, {
  //     headers: {
  //       Authorization: `token ${GITHUB_TOKEN}`,
  //     },
  //   });
  //   const data = response.data.items;
  //   // const { items } = response.data;

  //   dispatch({
  //     type: "GET_USERS",
  //     payload: data,
  //   });
  //   // setUsers(data);
  //   // setLoading(false);
  // };

  //Get single user
  // const getUser = async (login) => {
  //   setLoading();
  //   try {
  //     const response = await axios(`${GITHUB_URL}/users/${login}`, {
  //       headers: {
  //         Authorization: `token ${GITHUB_TOKEN}`,
  //       },
  //     });
  //     const data = response.data;

  //     dispatch({
  //       type: "GET_USER",
  //       payload: data,
  //     });
  //   } catch (error) {
  //     if (error.response.status === 404) {
  //       window.location = "/notfound";
  //     }
  //     console.log(error);
  //   }
  // };

  // // Get user Repos
  // const getUserRepos = async (login) => {
  //   setLoading();

  //   const params = new URLSearchParams({
  //     sort: "created",
  //     per_page: 10,
  //   });

  //   const response = await axios.get(
  //     `${GITHUB_URL}/users/${login}/repos?${params}`,
  //     {
  //       headers: {
  //         Authorization: `token ${GITHUB_TOKEN}`,
  //       },
  //     }
  //   );
  //   const data = response.data;

  //   dispatch({
  //     type: "GET_REPOS",
  //     payload: data,
  //   });
  // };

  // if (response.response.status === 404) {
  //   <Navigate to="/notfound" />;
  // } else {
  //   const data = response.json();
  //   // const { items } = response.data;

  //   dispatch({
  //     type: "GET_USER",
  //     payload: data,
  //   });
  // }

  //Clear users from state
  // const clearUsers = () => dispatch({ type: "CLEAR_USERS" });

  // //Set loading
  // const setLoading = () => dispatch({ type: "SET_LOADING" });

  return (
    <GithubContext.Provider
      value={{
        // users: state.users,
        // loading: state.loading,
        // user: state.user,
        // repos: state.repos,
        ...state,
        dispatch,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
