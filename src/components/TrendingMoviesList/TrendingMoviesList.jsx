// import PropTypes from 'prop-types';
import TrendingMoviesItem from '../TrendingMoviesItem/TrendingMoviesItem';
import s from './TrendingMoviesList.module.css';

const TrendingMoviesList = () => {
  return (
    <div>
      <h2 className={s.title}>Trending today</h2>
      <ul className={s.list}>
        <TrendingMoviesItem />
      </ul>
    </div>
  );
};

// TrendingMoviesList.propTypes = {
//   getMovieId: PropTypes.func,
// };

export default TrendingMoviesList;
