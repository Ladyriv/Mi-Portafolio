import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const Projects = () => {
  return (
    <div>
      <h1>PROYECTOS</h1>

      <>
      <CardGroup className="target">
      <Card>
        <Card.Img/>
        <Card.Body>
          <Card.Title>Imitación Dezeer</Card.Title>
          <Card.Text>
            Este proyecto se basa en la imitación de la página Dezeer
            utilizando herramientas de HTML y CSS
          </Card.Text>
        </Card.Body>
        <Card.Footer>
         <Card.Link href="#">Despliegue</Card.Link>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img />
        <Card.Body>
          <Card.Title>Calculadora</Card.Title>
          <Card.Text>
             Este proyecto se basa en la creación de una calculadora
             utilizando HTML, CSS y JavaScript{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Card.Link href="#">Despliegue</Card.Link>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img />
        <Card.Body>
          <Card.Title>Imitación z-shop</Card.Title>
          <Card.Text>
            Se basa en la imitación de la página Z-Shop, utilizando las herramientas
            especiales de CSS (Flex y Grid)
          </Card.Text>
        </Card.Body>
        <Card.Footer>
         <Card.Link href="#">Despliegue</Card.Link>
        </Card.Footer>
      </Card>
      </CardGroup>
      </>
    </div>
  )
}

export default Projects