import Carousel from 'react-bootstrap/Carousel';
import imageLog from '../assets/img/mandLR.png'
import imageElem from '../assets/img/Elementos.png'

const Home = () => {
    return(
      <Carousel>
        <Carousel.Item>
          <img
            className="img-presentation"
            src={imageLog}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Bienvenidos</h3>
            <p>Soy Leidy, desarrolladora web</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="img-tools"
            src={imageElem}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3></h3>
            <p>Este es mi espacio donde comparto mis proyectos.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
}

export default Home