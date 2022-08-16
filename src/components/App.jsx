import { lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Container from './Container/Container';

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const SearchedMoviesList = lazy(() =>
  import('../components/SearchedMoviesList/SearchedMoviesList')
);
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Cast = lazy(() => import('../pages/Cast'));
const Reviews = lazy(() => import('../pages/Reviews'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Container />}>
          <Route index element={<Home />}></Route>
          <Route path="/movie" element={<Movies />}></Route>
          <Route
            path="/movie?query=:query"
            element={<SearchedMoviesList />}
          ></Route>
          <Route path="/movie/:movieId" element={<MovieDetails />}>
            <Route path="credits" element={<Cast />}></Route>
            <Route path="reviews" element={<Reviews />}></Route>
          </Route>

          <Route path="*" element={<Navigate to="/" />}></Route>
        </Route>
      </Routes>
    </>
  );
};
