import Card from 'react-bootstrap/Card';
import { FiMail, FiFile } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { BsFillFileEarmarkPdfFill } from "react-icons/bs";


function Contact() {
  return (
    <Card className='card mb-2'>
      <h1>CONTACT</h1>
      <a className='icon' href='#'><FiMail />  leidy.riveraf@outlook.com</a>
      <a className='icon' href='https://wa.me/3138798873'> <FaWhatsapp/> Contactame </a>
      <a className='icon' href='./src/assets/docs/CV-LeidyRivera.pdf'> <FiFile />  CV </a>
      <a className='icon' href='./src/assets/docs/CV-LeidyRivera.pdf' download='CV-LeidyRivera.pdf'><BsFillFileEarmarkPdfFill /></a>

    </Card>
  );
}

export default Contact