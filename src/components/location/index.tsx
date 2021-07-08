import { Container } from './styles';

export default function LocationComponent() {
  return (
    <Container>
      <div>
        <h4>Find Us</h4>
        <h5>Our Address</h5>
        <h2>Rua Serafim Eulino de Espíndula</h2>
        <h2>Barra do Aririu - Palhoça</h2>
        <h3>Santa Catarina</h3>
        <h3>88134-376</h3>
      </div>

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d970.235607790345!2d-48.639774622555464!3d-27.679089238055123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2d06120be0f1c9f3!2sRancho%20Da%20K%C3%A1tia!5e0!3m2!1sen!2sie!4v1619623084667!5m2!1sen!2sie" loading="lazy"></iframe>
    </Container>
  );
}
