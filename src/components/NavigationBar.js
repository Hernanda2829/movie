import { Navbar, Container, Nav } from 'react-bootstrap';

const NavigationBar = () => {
  return (
    <div>
      <Navbar variant="light">
        <Container>
          <Navbar.Brand href="/" className="brand">
            Anime Movie
          </Navbar.Brand>
          <Nav className="nav">
            <Nav.Link href="#trending">Trending</Nav.Link>
            <Nav.Link href="#anime">Anime</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
