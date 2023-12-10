import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import RingLoader from 'react-spinners-components';

import NavHeader from './NavHeader';

export default function Layout() {
  return (
    <>
      <NavHeader />
      <Suspense
        fallback={<RingLoader color="#0d1757" type={'Gear'} size={'200px'} />}
      >
        <Outlet />
      </Suspense>
    </>
  );
}
