import { Container } from './styles';

interface Titles {
  title: string,
  subTitle: string
}

export default function SimpleTitle({ title, subTitle }:Titles) {
  return (
    <Container>

      <span>
        <h6>{title}</h6>
        <div></div>
        <h4>{subTitle}</h4>
      </span>

    </Container>
  );
}
