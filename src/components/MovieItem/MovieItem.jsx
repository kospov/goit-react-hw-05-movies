import { useLocation, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './MovieItem.module.css';

const MovieItem = ({ searchedMovies }) => {
  const location = useLocation();

  return (
    <>
      {searchedMovies &&
        searchedMovies.map(el => {
          return (
            <li className={s.item} key={el.id}>
              <Link to={'/movie/' + el.id} state={location}>
                {el.title}
              </Link>
            </li>
          );
        })}
    </>
  );
};

MovieItem.propTypes = {
  searchedMovies: PropTypes.array,
};

export default MovieItem;
