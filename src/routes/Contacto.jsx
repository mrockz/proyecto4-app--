import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const Contacto = () => {
  return (

    <div> 
    <center>
      
    <br>
    </br>  
    <h3> Déjanos tu datos y te contactaremos </h3>
    
    <Form style={{ width: '48rem' }}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label></Form.Label>
        <Form.Control type="text" placeholder="Ingresa tu Nombre" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label></Form.Label>
        <Form.Control type="email" placeholder="Ingresa tu Email" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label></Form.Label>
        <Form.Control type="phone" placeholder="Ingresa tu teléfono" />
      </Form.Group>
      
      
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="No soy un robot" />
      </Form.Group>
      
      
      <Button variant="primary" type="submit">
        Enviar
      </Button>


    </Form>

    </center>


    </div>
  )
}
