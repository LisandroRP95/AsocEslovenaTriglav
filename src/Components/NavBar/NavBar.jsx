import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = () => {
  return (
    <>
      <Navbar expand="lg" sticky="top" bg="primary" data-bs-theme="dark" className="me-auto">
        <Container>
          <Navbar.Brand href="/">Asoc. Eslovena Triglav Rosario</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/institucional">Institucional</Nav.Link>
            <Nav.Link href="/informacion">Información</Nav.Link>
            <Nav.Link href="/actividades">Actividades</Nav.Link>
            <Nav.Link href="/galeriadefotos">Galeria de Fotos</Nav.Link>
            <Nav.Link href="/notasdeinteres">Nota de interes</Nav.Link>
            <Nav.Link href="/ubicacion">Ubicación</Nav.Link>
            <Nav.Link href="/contacto">Contacto</Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar