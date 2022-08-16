import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchQueriedMovies } from '../../utils/fetch-api';
import MovieItem from 'components/MovieItem/MovieItem';
import s from './SearchedMoviesList.module.css';

const SearchedMoviesList = () => {
  const [searchParams] = useSearchParams();
  const [queriedMovie, setQueriedMovie] = useState(null);

  useEffect(() => {
    const queryForMovie = searchParams.get('query');

    if (queryForMovie === null) return;

    fetchQueriedMovies(queryForMovie)
      .then(queriedMovie => setQueriedMovie(queriedMovie))
      .catch(err => console.log(err));
  }, [searchParams]);

  return (
    <ul className={s.list}>
      <MovieItem searchedMovies={queriedMovie} />
    </ul>
  );
};

export default SearchedMoviesList;
