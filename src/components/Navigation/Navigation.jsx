import { NavLink, useLocation } from 'react-router-dom';
import s from './Navigation.module.css';

const setActiveLinkClass = ({ isActive }) =>
  isActive ? `${s.navLink} ${s.activeLink}` : s.navLink;

const Navigation = () => {
  const location = useLocation();

  return (
    <div className={s.nav}>
      <nav>
        <ul className={s.list}>
          <li className={s.item}>
            <NavLink
              to="/"
              className={setActiveLinkClass}
              state={location.state}
            >
              HOME
            </NavLink>
          </li>
          <li className={s.item}>
            <NavLink
              to="movie"
              className={setActiveLinkClass}
              state={location.state}
            >
              MOVIE
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
