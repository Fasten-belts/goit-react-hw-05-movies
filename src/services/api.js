import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = 'e4e03c88177e399c7e4af9b326b142dc';

async function fetchTrendMovie() {
  const response = await axios.get(
    `/trending/movie/week?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
}

async function fetchDetails(movieId) {
  const response = await axios.get(
    `/movie/${Number(movieId)}?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
}

async function fetchCast(movieId) {
  const response = await axios.get(
    `/movie/${Number(movieId)}/credits?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
}

async function fetchReviews(movieId) {
  const response = await axios.get(
    `/movie/${Number(movieId)}/reviews?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
}

async function fetchSearchMovies(query) {
  const response = await axios.get(
    `/search/movie?api_key=${API_KEY}&query=${query}&include_adult=true&language=en-US`
  );
  return response.data;
}
export {
  fetchCast,
  fetchDetails,
  fetchReviews,
  fetchSearchMovies,
  fetchTrendMovie,
};
