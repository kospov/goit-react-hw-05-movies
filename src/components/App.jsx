import { Route, Routes, Navigate } from 'react-router-dom';
import Container from './Container/Container';
import AppNav from './AppNav/AppNav';
import Home from '../pages/Home';
import Movies from '../pages/Movies';
import MovieDetails from '../pages/MovieDetails';
import Cast from '../pages/Cast';
import Reviews from '../pages/Reviews';

export const App = () => {
  return (
    <Container className="s.container">
      <AppNav />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/movie" element={<Movies />}>
          {/* <Route path="/movie?q=:query" element={<SearchedMovies />}></Route> */}
        </Route>
        <Route path="/movie/:movieId" element={<MovieDetails />}>
          <Route path="credits" element={<Cast />}></Route>
          <Route path="reviews" element={<Reviews />}></Route>
        </Route>

        <Route path="*" element={<Navigate to="/" />}></Route>
      </Routes>
    </Container>
  );
};
