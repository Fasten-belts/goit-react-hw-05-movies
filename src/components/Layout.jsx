import { Outlet } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import { Container } from './Container';
import { Toaster } from 'react-hot-toast';
import { Suspense } from 'react';
import { Loader } from './Loader/Loader';
import { Header, NavItem, NavList, StyledNavLink } from './Layout.styled';

function Layout() {
  return (
    <>
      <Header>
        <Container>
          <nav>
            <NavList>
              <NavItem>
                <StyledNavLink to="/">Home</StyledNavLink>
              </NavItem>
              <NavItem>
                <StyledNavLink to="/movies">Movies</StyledNavLink>
              </NavItem>
            </NavList>
          </nav>
          <main>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </main>
        </Container>
      </Header>
      <Toaster position="top-right" reverseOrder={true} />
      <GlobalStyle />
    </>
  );
}

export default Layout;
