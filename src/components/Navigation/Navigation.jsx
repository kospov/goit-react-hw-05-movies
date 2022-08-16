import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const setActiveLinkClass = ({ isActive }) =>
  isActive ? `${s.navLink} ${s.activeLink}` : s.navLink;

const Navigation = () => {
  return (
    <div className={s.nav}>
      <nav>
        <ul className={s.list}>
          <li className={s.item}>
            <NavLink to="/" className={setActiveLinkClass}>
              HOME
            </NavLink>
          </li>
          <li className={s.item}>
            <NavLink to="movie" className={setActiveLinkClass}>
              MOVIE
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
