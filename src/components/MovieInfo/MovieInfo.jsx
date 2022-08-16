// import { useEffect, useState } from 'react';
import { NavLink, useParams, useLocation, useNavigate } from 'react-router-dom';
// import { fetchMovieById } from '../../utils/fetch-api';
import s from './MovieInfo.module.css';

const setActiveLinkClass = ({ isActive }) =>
  isActive ? `${s.navLink} ${s.activeLink}` : s.navLink;

const MovieInfo = ({ movieDetails }) => {
  const location = useLocation();
  let { movieId } = useParams();
  // const [movieDetails, setMovieDetails] = useState(null);
  const navigate = useNavigate();

  // useEffect(() => {
  //   fetchMovieById(movieId)
  //     .then(movieDetails => setMovieDetails(movieDetails))
  //     .catch(err => console.log(err));
  // }, [movieId]);

  return (
    <div className={s.container}>
      <button
        type="button"
        className={s.btn}
        onClick={() => navigate(location.state)}
      >
        <span>&laquo; Go back</span>
      </button>
      {movieDetails && (
        <div className={s.containerMovie}>
          <div className={s.thumb}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movieDetails['poster_path']}`}
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
            <NavLink
              to={`/movie/${movieId}/credits`}
              state={location.state}
              className={setActiveLinkClass}
            >
              Cast
            </NavLink>
          </li>
          <li className={s.item}>
            <NavLink
              to={`/movie/${movieId}/reviews`}
              state={location.state}
              className={setActiveLinkClass}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MovieInfo;
