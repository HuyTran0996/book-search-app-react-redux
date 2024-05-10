import axios from "axios";

const BASE_URL = "http://openlibrary.org/search.json?title=";

const apiService = axios.create({
  baseURL: BASE_URL,
});

apiService.interceptors.request.use((req) => {
  console.log("Start request", req);
  return req;
});

apiService.interceptors.response.use(
  (res) => {
    console.log("Response", res);
    return res;
  },
  (err) => {
    console.log("Response Error", err);
    return Promise.reject(err.reject.data);
  }
);

export { apiService };
