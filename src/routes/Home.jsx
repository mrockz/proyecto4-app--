import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';



export const Home = () => {
  return (
    <div>


      <br></br>
      <center> 
        
        <h1>Bienvenidos a Japan Food</h1> 
      
        <p>El primer restaurant con comida de origen de Osaka, Japón </p>
      
      
      </center>

      <br></br>

      {/* <img src="https://free4kwallpapers.com/uploads/originals/2021/02/22/dotonbori-osaka.-wallpaper_.jpg" alt=""/> */}

      <center>
        <Card style={{ width: '48rem' }}>
         {/* <Card.Img variant="top" src="https://img.freepik.com/foto-gratis/pintura-sushi-plato-imagen-pez_188544-12221.jpg?w=1480&t=st=1693968605~exp=1693969205~hmac=e8ce8e4bb0351a4088d303eb7c4f60f40339791ec9ad88079109d4e31f7a7a97" /> */}
          <Card.Body>
            <Card.Title>Agenda 2023 Abierta</Card.Title>
            <Card.Text>
              Ven a conocer nuestra cocina Japonesa de autor.
            </Card.Text>
            <Link to='contacto'>
           <Button variant="warning">Contáctanos</Button>
           </Link>
          </Card.Body>
        </Card>
      </center>

   
      


    </div>





  )
}
