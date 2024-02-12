import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';


function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary bg-dark"  bg="dark" data-bs-theme="dark" >
      <Container>
        <Navbar.Brand href="#home">Netflix</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="#action1">Inicio</Nav.Link>
            <Nav.Link href="#action2">Series</Nav.Link>
            <Nav.Link href="#action3">Películas</Nav.Link>
            <Nav.Link href="#action4">Mi lista</Nav.Link>
            <Nav.Link href="#action5">Explora por idiomas</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;

