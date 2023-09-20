import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export const About = () => {
  return (
    
    <center>
    
    <br></br>
    <>
    <Card style={{ width: '48rem' }}>
    <Card.Img variant="top" src="https://media-cdn.tripadvisor.com/media/photo-s/11/aa/0e/36/hanamaru.jpg" />
    <Card.Body>
      <Card.Title>Nuestra Historia</Card.Title>
      <Card.Text>
      Japan Food promete toda la tradición del sushi japonés con más de 43 años en el centro de la ciudad. Un ambiente típico que asegura el entorno ideal para disfrutar un pedacito de Osaka, Japón.
      Ven a conocernos, no te arrepentirás!
      </Card.Text>
        <Link to='contacto'>
      <Button variant="warning">Haz tu reserva aquí</Button>
      </Link>
    </Card.Body>
  </Card>
  </>

  </center>
  
  )
}
