import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import './mainSite.css'


const MainSite = () => {
  return (
    <>

<Carousel data-bs-theme="dark">
      <Carousel.Item>
        <Image className='imgSize' src="../src/assets/Bled.jpg"/>
        <Carousel.Caption>
          
        <Link className="textDecoration" to={"/institucional"}>
          <h3>Institucional</h3>
          </Link>
          <p className="titleDescription">Conozca la historia de la asociación desde sus inicios.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Image src="../src/assets/images.jpg"/>
        <Carousel.Caption>
        <Link className="textDecoration" to={"/actividades"}>
          <h3>Actividades</h3>
          </Link>
          <p>Descubre nuestras diversas actividades y encuentra la que quieras compartir con nosotros.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <Image className='imgSize' src="../src/assets/slovenija.jpg"/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>


        <Container>
      <Row>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="../src/assets/images.jpg" />
            <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="../src/assets/images.jpg" />
            <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="../src/assets/images.jpg" />
            <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the  content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default MainSite