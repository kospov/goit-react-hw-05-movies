import s from './SearchForm.module.css';

const SearchForm = () => {
  return (
    <form>
      <input type="text" placeholder="Search movie" className={s.input}></input>
      <button type="submit" className={s.btn}>
        Search
      </button>
    </form>
  );
};

export default SearchForm;
