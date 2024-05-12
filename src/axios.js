import axios from "axios";

// const axiosInstace = axios.create({
//   baseURL: "http://localhost:8000/",
//   headers: {
//     "Content-Type": "application/json",
//     timeout: 1000,
//   },
// });

const axiosInstance = axios.create({
  // baseURL: "https://yts.mx/api/v2/list_movies.json?query_term=",
  baseURL: "https://yts.mx/api/v2/list_movies.json",
});

export default axiosInstance;

//https://yts.mx/api/v2/list_movies.json?query_term=ozark
