import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import RingLoader from 'react-spinners-components';

import NavLogo from './components/Navigation/NavLogo';
import NavLinks from './components/Navigation/NavLinks';
import { Header, Line, NavContainer } from './components/Navigation/NavHeader.styled';

export default function Layout() {
  return (
    <>
      <>
        <Header>
          <NavContainer>
            <NavLinks />
            <NavLogo />
          </NavContainer>
          <Line />
        </Header>
      </>
      <Suspense
        fallback={<RingLoader color="#0d1757" type={'Gear'} size={'200px'} />}
      >
        <Outlet />
      </Suspense>
    </>
  );
}
