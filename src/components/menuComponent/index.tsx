import { Container } from './styles';

interface MenuItem {
  id: string,
  title: string,
  photo: string,
  description: string,
}

export default function MenuCompotent({ id, title, photo, description }:MenuItem) {
  return (
    <Container photo={photo}>
      <div>
        {/* <img src={photo} alt={title} /> */}
      </div>
      <main>
        <h2>{title}</h2>

        <p>{description}</p>

        <span>Nº {id}</span>
      </main>
    </Container>
  );
}
