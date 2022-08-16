import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import s from './SearchForm.module.css';

const SearchForm = () => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    setQuery(query);
  }, [query]);

  const navigate = useNavigate();

  const handleChange = e => {
    const { value } = e.target;

    return setQuery(value.trim());
  };

  const handleSubmitClick = e => {
    e.preventDefault();

    navigate({ search: `?query=${query}` });

    reset();
  };

  const reset = () => {
    setQuery('');
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
    </>
  );
};

export default SearchForm;
