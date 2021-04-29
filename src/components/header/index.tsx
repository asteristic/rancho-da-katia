import React, { useState } from 'react';
import Link from "next/link";

import { Container } from './styles';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHandler = () => {
    setIsOpen(!isOpen);
  }
  return (
    <Container isOpen={isOpen}>
      <img src="logo.svg" alt="Racho da Katia logo"/>

      <nav>
        <ul>
          <li>
            <Link href="/">
              HOME
            </Link>
          </li>
          <li>
            <Link href="/menu">
              MENU
            </Link>
          </li>
          <li>
            <Link href="/location">
              LOCATION
            </Link>
          </li>
          <li>CONTACT</li>
        </ul>
      </nav>

      {isOpen 
          ? <FaTimes onClick={toggleHandler} />
          : <FaBars onClick={toggleHandler} />
        }

    </Container>
  )
}
