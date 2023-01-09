import imageLog from '../assets/img/Perfil1.png'
import imageElem from '../assets/img/Elementos.png'

const Home = () => {
    return(
      <div>
        
        <nav className='section1'>     
            <h1>BIENVENIDOS</h1>
            <img
            className="rounded-circle"
            src={imageLog}
            alt=""
            />
            <p className='text-center'>Soy Leidy, desarrolladora web, 
             me gusta la tecnologia, vivo en constante aprendizaje
            </p>
            <img
             className="rounded float-end"
             src={imageElem}
             alt=""
           />
            <p className='float-none'>Este es mi espacio donde 
               comparto mis proyectos.
               Tengo conocimientos en HTML,
               Css y Javascript y aprendiendo de React
            </p>
        </nav>
        
      </div>
    )
}

export default Home