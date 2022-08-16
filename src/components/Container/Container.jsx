import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppNav from '../AppNav/AppNav';
import s from './Container.module.css';

const Container = () => {
  return (
    <div className={s.container}>
      <AppNav />
      <Suspense fallback={<h1 className={s.title}>Loading...</h1>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Container;
