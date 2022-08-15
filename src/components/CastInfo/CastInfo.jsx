import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCastForMovie } from '../../utils/fetch-api';
import s from './CastInfo.module.css';

const CastInfo = () => {
  let { movieId } = useParams();
  const [castDetails, setCastDetails] = useState([]);

  useEffect(() => {
    fetchCastForMovie(movieId).then(castDetails => setCastDetails(castDetails));
  }, [movieId]);

  return (
    <ul className={s.list}>
      {castDetails &&
        castDetails.map(el => {
          // const image

          return (
            <li className={s.item}>
              <div className={s.thumb}>
                <img
                  src={'https://image.tmdb.org/t/p/w500' + el['profile_path']}
                  alt={el.name}
                  className={s.poster}
                />
              </div>
              <h2 className={s.title}>{el.name}</h2>
              <p className={s.character}> Character: {el.character}</p>
            </li>
          );
        })}
    </ul>
  );
};

export default CastInfo;
