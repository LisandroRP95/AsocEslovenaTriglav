import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './footer.css'


const Footer = () => {
  return (
    <>

      <div className='footerDiv'>
        <Container>
          <Row>
            <Col><br /><Image src="../src/assets/escudofinal-02.png" roundedCircle /></Col>
            <Col><br /><p className='footerData'>© 2024 Asociación Eslovena Triglav Rosario</p></Col>
            <Col><br /><p className='footerData'>Developed by athomic</p></Col>
          </Row>
        </Container>
      </div>


    </>
  )
}

export default Footer