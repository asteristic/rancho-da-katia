import MenuComponent from '../menuComponent';

import { Container } from "./styles";

interface Dishe {
  uid: string,
  name: string,
  photo: string,
  ingredients: string,
  description: string,
  valor: string,
  disheNumber: number,
}

interface DishesProps {
  dishes: Dishe[] 
}

export default function Dinner({ dishes }: DishesProps) {
  return (
    <Container>
      {dishes.map(dishe => (
        <MenuComponent 
          key={dishe.uid}
          id={String(dishe.disheNumber)} 
          title={dishe.name}
          photo={dishe.photo}
          description={dishe.description}
        />
      ))}
    </Container>
  );
}
