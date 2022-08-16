import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import s from './SearchForm.module.css';

const SearchForm = () => {
  const [query, setQuery] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = e => {
    const { value } = e.target;

    return setQuery(value.trim());
  };

  const handleSubmitClick = e => {
    e.preventDefault();
    const formEl = document.querySelector('form');

    navigate({ search: `?query=${query}` }, { state: location.state });

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
          value={query}
        ></input>
        <button type="submit" className={s.btn}>
          Search
        </button>
      </form>
      {/* <ul className={s.list}>
        {queriedMovie &&
          queriedMovie.map(el => {
            const linkToEl = '/movie/' + el.id;
            return (
              <li className={s.item} key={el.id}>
                <Link to={linkToEl}>{el.title}</Link>
              </li>
            );
          })}
      </ul> */}
    </>
  );
};

export default SearchForm;
