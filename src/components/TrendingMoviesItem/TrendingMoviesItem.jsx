import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchTrendingMovies } from '../../utils/fetch-api';
import s from './TrendingMoviesItem.module.css';

const TrendingMoviesItem = () => {
  const [trendMovies, setTrendMovies] = useState(null);

  useEffect(() => {
    fetchTrendingMovies().then(trendMovies => setTrendMovies(trendMovies));
  }, []);

  return (
    <>
      {trendMovies &&
        trendMovies.map(el => {
          const linkToEl = '/movie/' + el.id;
          return (
            <li className={s.item} key={el.id}>
              <Link to={linkToEl}>{el.title}</Link>
            </li>
          );
        })}
    </>
  );
};

export default TrendingMoviesItem;
