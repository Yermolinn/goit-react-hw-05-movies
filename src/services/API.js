import axios from 'axios';
const API_KEY = 'c37d4b7e60468bc94e880299c0a50c58';
const BASE_URL = 'https://api.themoviedb.org/3/';

axios.defaults.baseURL = BASE_URL;

export const fetchMovies = async ({
  fetchParams,
  query = null,
  controller,
}) => {
  const response = await axios(fetchParams, {
    signal: controller.signal,
    params: { api_key: API_KEY, query },
  });
  return response.data;
};

