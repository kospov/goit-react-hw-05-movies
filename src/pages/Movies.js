import { Outlet } from 'react-router-dom';
import SearchForm from '../components/SearchForm/SearchForm.jsx';

const Movies = () => {
  return (
    <>
      <SearchForm />
      <Outlet />
    </>
  );
};

export default Movies;
