import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviewsForMovie } from '../../utils/fetch-api';
import s from './ReviewsInfo.module.css';

const ReviewsInfo = () => {
  let { movieId } = useParams();
  const [reviewsDetails, setReviewsDetails] = useState([]);

  useEffect(() => {
    fetchReviewsForMovie(movieId).then(reviewsDetails =>
      setReviewsDetails(reviewsDetails)
    );
  }, [movieId]);

  return (
    <ul className={s.list}>
      {reviewsDetails &&
        reviewsDetails.map(el => {
          return (
            <li className={s.item}>
              <h2 className={s.title}>Author: {el.author}</h2>
              <p className={s.content}> {el.content}</p>
            </li>
          );
        })}
    </ul>
  );
};

export default ReviewsInfo;
