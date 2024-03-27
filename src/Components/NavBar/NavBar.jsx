import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import './navBar.css'

const NavBar = () => {
  return (
    <>
      <Navbar expand="lg" sticky="top" bg="primary" data-bs-theme="dark" className="me-auto">
        <Container>
          <Navbar.Brand href="/">
            <Row>
            <Col xs={6} md={4}>
            <Image className='logoChico' src="../src/assets/escudofinal-01.png" roundedCircle />
            </Col>
            </Row>
          </Navbar.Brand>
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