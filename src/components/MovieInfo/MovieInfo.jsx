import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchMovieById } from '../../utils/fetch-api';
import s from './MovieInfo.module.css';

const MovieInfo = () => {
  let { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    fetchMovieById(movieId).then(movieDetails => setMovieDetails(movieDetails));
  }, [movieId]);

  const linkToCast = '/movie/' + movieId + '/credits';
  const linkToReviews = '/movie/' + movieId + '/reviews';

  return (
    <div className={s.container}>
      <button type="button" className={s.btn}>
        <span>&laquo; Go back</span>
      </button>
      {movieDetails && (
        <div className={s.containerMovie}>
          <div className={s.thumb}>
            <img
              src="https://image.tmdb.org/t/p/qpH6z1e4Lm9O4vWClSfDzSxPnqd.jpg"
              alt={movieDetails.title}
              className={s.poster}
            />
          </div>
          <div className={s.discription}>
            <h1 className={s.title}>
              {movieDetails.title} ({movieDetails['release_date'].split('-')[0]}
              )
            </h1>
            <p className={s.text}>
              User score: {Math.round(movieDetails['vote_average'])}%
            </p>
            <h2 className={s.subtitle}>Overview</h2>
            <p className={s.text}>{movieDetails.overview}</p>
            <h3 className={s.subsubtitle}>Genres</h3>
            <p className={s.text}>
              {movieDetails.genres.map(el => el.name).join(' ')}
            </p>
          </div>
        </div>
      )}
      <div className={s.containerAdditionalInfo}>
        <ul className={s.list}>
          Additional information
          <li className={s.item}>
            <Link to={linkToCast}>Cast</Link>
          </li>
          <li className={s.item}>
            <Link to={linkToReviews}>Reviews</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MovieInfo;
