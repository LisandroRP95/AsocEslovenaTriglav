import './contact.css'
import Card from 'react-bootstrap/Card';

const Contact = () => {
  return (
    <>

<Card className='card' border="dark">
 
        <Card.Body>
          <Card.Title>Contacto</Card.Title>
          <Card.Text>
          Dirección: Mitre 3924, Rosario, Santa Fe, Argentina
          </Card.Text>
          <Card.Text>
          email: triglav.rosario@gmail.com
          </Card.Text>
        </Card.Body>
      </Card>
      <div className='marginText'>
        <p>Déjenos su consulta, nos comunicaremos a la brevedad</p>
      </div>
    </>
  );
};

export default Contact;
