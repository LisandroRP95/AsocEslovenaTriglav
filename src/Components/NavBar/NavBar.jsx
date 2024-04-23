import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import './navBar.css'

const NavBar = () => {
  return (
    <>
      <Navbar expand="lg" sticky="top" bg="primary" data-bs-theme="dark" className="me-auto">
        <Container>

            <Row>
            <Col xs={6} md={4}>
            <Link to={"/"} >
            <Image className='logoChico' src="../src/assets/escudofinal-01.png" roundedCircle />
            </Link>
            </Col>
            </Row>
     
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className='btnNavBar' to={"/"}>Inicio</Link>
            <Link className='btnNavBar' to={"/institucional"}>Institucional</Link>
            <Link className='btnNavBar' to={"/informacion"}>Información</Link>
            <Link className='btnNavBar' to={"/actividades"}>Actividades</Link>
            <Link className='btnNavBar' to={"/galeriadefotos"}>Galeria de Fotos</Link>
            <Link className='btnNavBar' to={"/notasdeinteres"}>Notas de Interes</Link>
            <Link className='btnNavBar' to={"/ubicacion"}>Ubiación</Link>
            <Link className='btnNavBar' to={"/contacto"}>Contacto</Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar