import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchQueriedMovies } from '../../utils/fetch-api';
import s from './SearchForm.module.css';

const SearchForm = () => {
  const [query, setQuery] = useState(null);
  const [queryForMovie, setQueryForMovie] = useState(null);
  const [queriedMovie, setQueriedMovie] = useState(null);

  useEffect(() => {
    fetchQueriedMovies(queryForMovie).then(queriedMovie =>
      setQueriedMovie(queriedMovie)
    );
  }, [queryForMovie]);

  const handleChange = e => {
    const { value } = e.target;

    return setQuery(value.trim());
  };

  const handleSubmitClick = e => {
    e.preventDefault();
    const formEl = document.querySelector('form');

    setQueryForMovie(query);

    formEl.reset();

    reset();
  };

  const reset = () => {
    setQuery(null);
  };

  return (
    <>
      <form className={s.form} onSubmit={handleSubmitClick}>
        <input
          type="text"
          placeholder="Search movie"
          className={s.input}
          onChange={handleChange}
        ></input>
        <button type="submit" className={s.btn}>
          Search
        </button>
      </form>
      <ul className={s.list}>
        {queriedMovie &&
          queriedMovie.map(el => {
            const linkToEl = '/movie/' + el.id;
            return (
              <li className={s.item} key={el.id}>
                <Link to={linkToEl}>{el.title}</Link>
              </li>
            );
          })}
      </ul>
    </>
  );
};

SearchForm.propTypes = {
  updateQuery: PropTypes.func,
};

export default SearchForm;
