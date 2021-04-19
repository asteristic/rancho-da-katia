import React, { useState } from 'react';

import { Container } from './styles';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHandler = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  }
  return (
    <Container isOpen={isOpen}>
      <img src="logo.svg" alt="Racho da Katia logo"/>

      <nav>
        <ul>
          <li>
            HOME
          </li>
          <li>
            MENU
          </li>
          <li>
            LOCATION
          </li>
          <li>
            CONTACT
          </li>
        </ul>
      </nav>

      {isOpen 
          ? <FaTimes onClick={toggleHandler} />
          : <FaBars onClick={toggleHandler} />
        }

    </Container>
  )
}
