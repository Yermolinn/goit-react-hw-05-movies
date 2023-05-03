import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  Container,
  HeaderContainer,
  Header,
  Nav,
  NavList,
  Link,
  Item,
} from './Layout.styled';
import Loader from 'components/Loader/Loader';

const Layout = () => {
  return (
    <>
      <Header>
        <HeaderContainer>
          <Nav>
            <NavList>
              <Item>
                <Link to="/">Home</Link>
              </Item>
              <Item>
                <Link to="/movies">Movies</Link>
              </Item>
            </NavList>
          </Nav>
        </HeaderContainer>
      </Header>
      <Container>
        <main>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </main>
      </Container>
    </>
  );
};

export default Layout;
