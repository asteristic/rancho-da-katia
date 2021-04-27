import MenuComponent from '../menuComponent';

import { Container } from "./styles";

export default function Dinner() {
  return (
    <Container>
      <MenuComponent 
        id="42" 
        title="Prawn With Cream"
        photo="menu/menu-09.jpg"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci 
        fuga consequuntur labore maiores. Aperiam vero adipisci quod 
        repellendus."  
      />
      <MenuComponent 
        id="37" 
        title="Steamed Prawn"
        photo="menu/menu-10.jpg"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci 
        fuga consequuntur labore maiores. Aperiam vero adipisci quod 
        repellendus."  
      />
    </Container>
  );
}
