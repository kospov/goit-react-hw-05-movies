import { Suspense, useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { fetchMovieById } from '../utils/fetch-api';
import MovieInfo from '../components/MovieInfo/MovieInfo.jsx';

const MovieDetails = () => {
  let { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    fetchMovieById(movieId)
      .then(movieDetails => setMovieDetails(movieDetails))
      .catch(err => console.log(err));
  }, [movieId]);

  return (
    <>
      <MovieInfo movieDetails={movieDetails} />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
