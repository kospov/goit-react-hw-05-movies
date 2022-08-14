import axios from 'axios';

const API_KEY = '905309a28b68a9146011759181c1a3d1';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const fetchTrendingMovies = () => {
  return axios
    .get('/trending/movie/day', {
      params: {
        api_key: API_KEY,
      },
    })
    .then(response => response.data.results)
    .catch(error => console.log(error));
};

export const fetchQueriedMovies = query => {
  return axios
    .get('/search/movie', {
      params: {
        api_key: API_KEY,
        query,
      },
    })
    .then(response => response.data)
    .catch(error => console.log(error));
};

export const fetchMovieById = movie_id => {
  return axios
    .get(`/movie/${movie_id}`, {
      params: {
        api_key: API_KEY,
      },
    })
    .then(response => response.data);
};

export const fetchCastForMovie = movie_id => {
  return axios
    .get(`/movie/${movie_id}/credits`, {
      params: {
        api_key: API_KEY,
      },
    })
    .then(response => response.data.cast)
    .catch(error => console.log(error));
};

export const fetchReviewsForMovie = movie_id => {
  return axios
    .get(`/movie/${movie_id}/reviews`, {
      params: {
        api_key: API_KEY,
        movie_id,
      },
    })
    .then(response => response.data.results)
    .catch(error => console.log(error));
};
