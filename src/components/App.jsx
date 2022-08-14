import { Route, Routes, Navigate, useParams } from 'react-router-dom';
import Container from './Container/Container';
import AppNav from './AppNav/AppNav';
import Home from '../pages/Home';
import Movies from '../pages/Movies';
import MovieDetails from '../pages/MovieDetails';
import Cast from '../pages/Cast';
import Reviews from '../pages/Reviews';
import { useState } from 'react';
import { useEffect } from 'react';

export const App = () => {
  const { movie_id } = useParams();
  const [movieId, setMovieId] = useState(null);

  useEffect(() => {
    setMovieId(movie_id);
  }, [movie_id]);

  return (
    <Container className="s.container">
      <AppNav />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/movie" element={<Movies />}></Route>
        <Route path="/movie/:movieId" element={<MovieDetails />}>
          <Route path="credits" element={<Cast />} movieId={movieId}></Route>
          <Route path="reviews" element={<Reviews />} movieId={movieId}></Route>
        </Route>

        <Route path="*" element={<Navigate to="/" />}></Route>
      </Routes>
    </Container>
  );
};
