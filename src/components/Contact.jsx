import Card from 'react-bootstrap/Card';
import { FiMail, FiPhoneCall, FiFile } from "react-icons/fi";


function Contact() {
  return (
    <Card className='card mb-2'>
      <h1>CONTACT</h1>
      <a className='icon' href='#'><FiMail />  leidy.riveraf@outlook.com</a>
      <a className='icon' href='#'> <FiPhoneCall />   313 8798873 </a>
      <a className='icon' href='./Docums'> <FiFile />  CV </a>
    </Card>
  );
}

export default Contact