import MovieItem from 'components/MovieItem/MovieItem';
import s from './SearchedMoviesList.module.css';

const SearchedMoviesList = ({ queriedMovie }) => {
  return (
    <ul className={s.list}>
      <MovieItem searchedMovies={queriedMovie} />
    </ul>
  );
};

export default SearchedMoviesList;
