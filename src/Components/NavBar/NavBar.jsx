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
              <Nav.Link href="#Activities">Actividades</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
    </>
  )
}

export default NavBar