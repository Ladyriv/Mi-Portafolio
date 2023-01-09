import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

const Projects = () => {
  return (
    <div className='Container-projects'>
      <h1>PROYECTOS</h1>

      <>
      <CardGroup className="card-deck row">
      <Card  className='col-xs-12 col-sm-6 col-md-4'>
        <Card.Img/>
        <Card.Body className='card mb-4'>
          <Card.Title>Imitación Dezeer</Card.Title>
          <Card.Text>
            Este proyecto se basa en la imitación de la página Dezeer
            utilizando herramientas de HTML y CSS
          </Card.Text>
        </Card.Body>
        <Card.Footer className='card mb-5'>
         <Card.Link href="https://dezeer-imitacion.vercel.app/">Despliegue</Card.Link>
        </Card.Footer>
      </Card>
      <Card className='col-xs-12 col-sm-6 col-md-4'>
        <Card.Img />
        <Card.Body className='card mb-4'>
          <Card.Title>Calculadora</Card.Title>
          <Card.Text>
             Este proyecto se basa en la creación de una calculadora
             utilizando HTML, CSS y JavaScript{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer className='card mb-5'>
          <Card.Link href="https://calculadoralr-01.vercel.app/">Despliegue</Card.Link>
        </Card.Footer>
      </Card>
      <Card className='col-xs-12 col-sm-6 col-md-4'>
        <Card.Img />
        <Card.Body className='card mb-4'>
          <Card.Title>Imitación z-shop</Card.Title>
          <Card.Text>
            Se basa en la imitación de la página Z-Shop, utilizando las herramientas
            especiales de CSS (Flex y Grid)
          </Card.Text>
        </Card.Body>
        <Card.Footer className='card mb-5'>
         <Card.Link href="https://zshop-css-by-lady.vercel.app/">Despliegue</Card.Link>
        </Card.Footer>
      </Card>
      </CardGroup>
      </>
      <>
      <a className='icon-social float-right' href='https://github.com/Ladyriv'><FaGithubSquare/></a>
      <a className='icon-social'href='https://www.linkedin.com/in/leidy-caterin-rivera-165420a2'><FaLinkedin/></a>
      </>
    </div>
    
  )
}

export default Projects