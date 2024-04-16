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
            <Col><br /><Image className='logoChico' src="../src/assets/escudofinal-02.png" roundedCircle /></Col>
            <Col><br /><p className='footerData'>© 2024 Asociación Eslovena Triglav Rosario</p></Col>
            <Col><br /><p className='footerData'>Developed by athomic</p></Col>
          </Row><br />
          <Row>
            <Col>
            <div>
              <a  className='socialText' href="https://www.facebook.com/TriglavRosario">
                <Image className='imageSize' src="../src/assets/fb.png" roundedCircle />/TriglavRosario
              </a>
            </div>
            <div>
              <a className='socialText' href="https://www.instagram.com/triglav.rosario">
              <Image className='imageSize' src="../src/assets/instagram.png" roundedCircle />/triglav.rosario
              </a>
              </div>
            </Col>
          </Row>
        </Container><br />
      </div>


    </>
  )
}

export default Footer