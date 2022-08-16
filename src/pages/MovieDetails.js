import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import MovieInfo from '../components/MovieInfo/MovieInfo.jsx';

const MovieDetails = () => {
  return (
    <>
      <MovieInfo />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
