import Accordion from 'react-bootstrap/Accordion';

export const Blog = () => {

  return (
    <div> 
<br></br>
<center>
<h3> Bienvenid@s al Blog de Japan Food </h3>
<h6> Aquí podrás encontrar breves estractos de historia de nuestra comida</h6>

</center>

    <center>
      
    <br>


    </br>

    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>La historia del Sushi</Accordion.Header>
        <Accordion.Body>
        Si analizamos la etimología de la palabra sushi, significa, a grandes rasgos, “madurar el pescado”.

Para conocer la historia del sushi japonés, debemos remontarnos al siglo VIII. Parece que la llegada del sushi a Japón fue a través de Corea. El primer sushi japonés se elaboraba de forma parecida al chino, siguiendo un proceso de fermentación. Pero se comía el arroz y el pescado se cocinaba poco o se consumía crudo.

Ya en el siglo XVII se comenzó a añadir vinagre de arroz, por lo que el tiempo de fermentación se acortó considerablemente. El vinagre sirve para conservar los alimentos, por lo que este plato se popularizó.

No fue hasta el siglo XIX cuando el sushi comenzó a elaborarse sin fermentar y se estableció como comida callejera, ya que se podía comer con las manos. Durante los periodos Edo y Meiji eran habituales los puestos de sushi y no era un alimento que se consumiera en restaurantes.

Después de la Segunda Guerra Mundial, se comenzó a servir el sushi en restaurantes y comenzó a considerarse un plato más lujoso. Entre otros motivos, los puestos fueron desapareciendo por considerarse que las condiciones de salubridad no eran las mejores.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Cómo se come el Sushi</Accordion.Header>
        <Accordion.Body>
        1. Con las Manos: El sushi tal y como lo conocemos es un plato que se degusta con las manos. Por tanto, no es necesario que nos peleemos con los palillos si no queremos, aunque también es válido comerlo con palillos.
        <br></br>
        <br></br>
        2. De un bocado: El sushi tiene un tamaño perfecto para comer de un solo bocado, ¡a no ser que estemos ante un temaki! Desde luego, no hay que partirlo con los palillos, si no queremos faltar a los buenos modales en una mesa japonesa.
        <br></br>
        <br></br>
        3. No se baña en Soya: El sushi tiene un sabor delicado y armonioso que podemos estropear si abusamos de la salsa de soja. Se moja ligeramente y por el lado del pescado, para que el arroz no se desmorone.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>La cultura Japonesa</Accordion.Header>
        <Accordion.Body>
          
La cultura japonesa es diversa, ancestral y está orientada hacia el mundo moderno: sin dejar atrás su tradición de samuráis, templos y cocina tradicional, Japón también ha sabido renovarse gracias al manga y las nuevas tecnologías. Sin embargo, los elementos clásicos son los que más atraen a los turistas.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Como se Divide la Comida Japonesa</Accordion.Header>
        <Accordion.Body>
          
En japón se puede dividir su gastronomía en dos, la comida Washoku o comida japonesa tradicional y el Yoshoku que es aquel estilo que tiene una influencia gastronómica occidental. El Washoku es considerado como patrimonio cultural intangible de la humanidad según la UNESCO en 2013
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>


    </center>


    </div>
  );
}
