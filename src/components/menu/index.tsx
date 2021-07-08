import { Container, MenuItem, Button } from './styles';

export default function OurMenu() {
  return (
    <Container>
      <h3>Discovery</h3>
      <h2>Our Menu</h2>
      <article>
        <MenuItem>
          <img src="menu/menu-02.jpg" alt=""/>
          <div>
            <p>Breaded Fish</p>
          </div>
        </MenuItem>
        <MenuItem>
          <img src="menu/menu-04.jpg" alt=""/>
          <div>
            <p>Breaded Chicken</p>
          </div>
        </MenuItem>
        <MenuItem>
          <img src="menu/menu-05.jpg" alt=""/>
          <div>
            <p>Beef Steak</p>
          </div>
        </MenuItem>
        <MenuItem>
          <img src="menu/menu-06.jpg" alt=""/>
          <div>
            <p>Cheese Bread</p>
          </div>
        </MenuItem>
      </article>

      <Button>View Full Menu</Button>
    </Container>

  );
}
 