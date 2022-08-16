import PropTypes from 'prop-types';
import MovieItem from 'components/MovieItem/MovieItem';
import s from './TrendingMoviesList.module.css';

const TrendingMoviesList = ({ trendMovies }) => {
  return (
    <>
      <h2 className={s.title}>Trending today</h2>
      <ul className={s.list}>
        <MovieItem searchedMovies={trendMovies} />
      </ul>
    </>
  );
};

TrendingMoviesList.propTypes = {
  trendMovies: PropTypes.array,
};

export default TrendingMoviesList;
