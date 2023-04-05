import Card from 'react-bootstrap/Card';
import { FiMail, FiFile } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import profileImg from '../assets/img/Contact-me.png'

function BgColorExample() {
  return (
    <div className='contact'>
      {[
        'Warning',
      ].map((variant) => (
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          className="card-contact row-cols-xs-2 row-cols-sm"
        >
          <Card.Header>Contacto</Card.Header>
          <Card.Body className='body-card'>
            <img className="profile-contact" src={profileImg}/>
            <Card.Text className='text-contact'>
              <a className='icon' href='#'><FiMail />    leidy.riveraf@outlook.com</a>
              <br/>
              <a className='icon' href='https://wa.me/3138798873'><FaWhatsapp/>    Contactame </a>
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default BgColorExample;
