import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../utils/fetch-api';
import TrendingMoviesList from '../components/TrendingMoviesList/TrendingMoviesList.jsx';

const Home = () => {
  const [trendMovies, setTrendMovies] = useState(null);

  useEffect(() => {
    fetchTrendingMovies()
      .then(trendMovies => setTrendMovies(trendMovies))
      .catch(err => console.log(err));
  }, []);

  return <TrendingMoviesList trendMovies={trendMovies} />;
};

export default Home;
