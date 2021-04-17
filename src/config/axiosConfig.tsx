import axios from 'axios';

export const instance = axios.create({
    baseURL: 'http://localhost:8080/blog/'
});

instance.interceptors.request.use(
  function(config) {
    const localToken = localStorage.getItem("jwt"); 
    const sessionToken = sessionStorage.getItem("jwt"); 
    if (localToken) config.headers.Authorization = 'Bearer ' + localToken
    if (sessionToken) config.headers.Authorization = 'Bearer ' + sessionToken
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

export const noToken = axios.create({
  baseURL: 'http://localhost:8080/blog/'
});
