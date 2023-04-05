import imageLog from '../assets/img/Perfil1.png'
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaNodeJs  } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiExpress, SiVite, SiMongodb  } from "react-icons/si";
import gif from '../assets/img/138767-laptop-animatiion.gif'
const Home = () => {
    return(
      <div>
        <section>
          <nav className='section'>
            <div className='section1'>
               <h1 className="animate__flipInX">BIENVENIDOS</h1>
               <img
               className="profile-home"
               src={imageLog}
               alt=""
               />
                <p className='text-center'>Soy Leidy, desarrolladora web, 
                me gusta la tecnologia, vivo en constante aprendizaje
                </p>
            </div>
            <div className='section2'>
               <img
               className="image-pc"
               src={gif}
               alt=""
               />
                <p className='float-none'>Este es mi espacio donde 
                 comparto mis proyectos. 
                 Tengo conocimientos en HTML,
                 Css y Javascript y aprendiendo de React
                </p>
            </div>          
           
            <div className='icons-skills'>
              <a className='icons-html' href='#'><FaHtml5 style={{color: '#E34F26'}}/></a>
              <a className='icons-css' href='#'><FaCss3Alt style={{color: '#1572B6'}} /></a>
              <a className='icons-javascript' href='#'><SiJavascript style={{color: '#F7DF1E'}} /></a>
              <a className='icons-tailwind' href='#'><SiTailwindcss style={{color: '#06B6D4'}} /></a>
              <a className='icons-bootstrap' href='#'><FaBootstrap style={{color: '#7952B3'}} /></a>
              <a className='icons-react' href='#'><FaReact style={{color: '#61DAFB'}} /></a>
              <a className='icons-vite' href='#'><SiVite style={{color: '#646CFF'}} /></a>
              <a className='icons-node' href='#'><FaNodeJs style={{color: '#339933'}} /></a>
              <a className='icons-mongo' href='#'><SiMongodb style={{color: '#47A248'}}/></a>
              <a className='icons-express' href='#'><SiExpress style={{color: '#FFF'}} /></a>
            </div>
          </nav>
        </section>

      </div>
      
      
    );
}

export default Home