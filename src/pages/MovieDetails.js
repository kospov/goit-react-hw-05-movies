import { Outlet } from 'react-router-dom';
import MovieInfo from '../components/MovieInfo/MovieInfo.jsx';

const MovieDetails = () => {
  return (
    <>
      <MovieInfo />
      <Outlet />
    </>
  );
};

export default MovieDetails;
