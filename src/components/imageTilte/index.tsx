import { Container } from './styles';

interface PropsImageTitle {
  title: string,
  subTitle: string,
  backgroundImage: string
}

export default function ImageTitle({ title, subTitle, backgroundImage,  }: PropsImageTitle) {
  return (
    <Container backgroundImage={backgroundImage}>

      <span>
        <h6>{title}</h6>
        <div></div>
        <h4>{subTitle}</h4>
      </span>

    </Container>
  );
}
