import { useState, useEffect } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { fetchQueriedMovies } from '../../utils/fetch-api';
import s from './SearchedMoviesList.module.css';

const SearchedMoviesList = () => {
  const [searchParams] = useSearchParams();
  const [queriedMovie, setQueriedMovie] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const queryForMovie = searchParams.get('query');

    if (queryForMovie === 0) return;

    fetchQueriedMovies(queryForMovie).then(queriedMovie =>
      setQueriedMovie(queriedMovie)
    );
  }, [searchParams]);

  return (
    <ul className={s.list}>
      {queriedMovie &&
        queriedMovie.map(el => {
          return (
            <li className={s.item} key={el.id}>
              <Link to={'/movie/' + el.id} state={location}>
                {el.title}
              </Link>
            </li>
          );
        })}
    </ul>
  );
};

export default SearchedMoviesList;