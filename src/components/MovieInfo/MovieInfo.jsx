import { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';
import { fetchMovieById } from '../../utils/fetch-api';
import s from './MovieInfo.module.css';

const setActiveLinkClass = ({ isActive }) =>
  isActive ? `${s.navLink} ${s.activeLink}` : s.navLink;

const MovieInfo = () => {
  let { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  // const location = useLocation();

  // console.log(location);

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
              src={
                'https://image.tmdb.org/t/p/w500' + movieDetails['poster_path']
              }
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
            <NavLink to={linkToCast} className={setActiveLinkClass}>
              Cast
            </NavLink>
          </li>
          <li className={s.item}>
            <NavLink to={linkToReviews} className={setActiveLinkClass}>
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MovieInfo;
