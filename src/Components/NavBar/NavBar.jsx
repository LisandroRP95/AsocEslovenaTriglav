import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavBar = () => {
  return (
    <>
       <Navbar sticky="top" bg="primary" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home">Asoc. Eslovena Triglav Rosario</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Inicio</Nav.Link>
              <Nav.Link href="#Activities">Institucional</Nav.Link>
              <Nav.Link href="#Activities">Información</Nav.Link>
              <Nav.Link href="#pricing">Actividades</Nav.Link>
              <Nav.Link href="#pricing">Galeria de Fotos</Nav.Link>
              <Nav.Link href="#pricing">Nota de interes</Nav.Link>
              <Nav.Link href="#pricing">Ubicación</Nav.Link>
              <Nav.Link href="#pricing">Contacto</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
    </>
  )
}

export default NavBar