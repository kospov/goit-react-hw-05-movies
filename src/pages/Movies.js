import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchQueriedMovies } from '../utils/fetch-api';
import SearchForm from '../components/SearchForm/SearchForm.jsx';
import SearchedMoviesList from '../components/SearchedMoviesList/SearchedMoviesList.jsx';

const Movies = () => {
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
    <>
      <SearchForm />
      <SearchedMoviesList queriedMovie={queriedMovie} />
    </>
  );
};

export default Movies;
