import { Container } from './styles';

import { 
  FaFacebookSquare, 
  FaTripadvisor, 
  FaYoutubeSquare, 
  FaWhatsappSquare, 
  FaTwitterSquare,
  FaInstagram
} from "react-icons/fa";

export default function Contact() {
  return (
    <Container>
      <div>
        <p>Share your moment with us</p>
        <h1>#RANCHODAKATIA</h1>
        <span>
          <FaInstagram />
          <h2>@ranchodakatia</h2>
        </span>
        
        <ul>
          <li><FaFacebookSquare /></li>
          <li><FaWhatsappSquare /></li>
          <li><FaTwitterSquare /></li>
          <li><FaTripadvisor /></li>
          <li><FaYoutubeSquare /></li>
        </ul>
      </div>
    </Container>
  );
}
