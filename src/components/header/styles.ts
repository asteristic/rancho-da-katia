import styled, {css} from 'styled-components';

interface ContainerProps {
  isOpen: boolean;
}

export const Container = styled.header<ContainerProps>`
  height: 95px;
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    height: 45px;
    position: relative;
    z-index: 5;
  }

  nav {
    height: 100vh;
    width: 100%;
    background: #fff;
    position: absolute;
    z-index: 1;
    top: -110vh;
    ${props => props.isOpen && css`
      top: 0;
    `}
    left: 0;

    transition: top 1s;

    display: flex;
    align-items: center;
    justify-content: center;
    
  }

  ul {
    display: flex;
    flex-direction: column;

    font-weight: 500;
    list-style: none;
    text-transform: uppercase;

    li {
      & + li {
        margin-top: 4rem;
      }
    }
  }

  svg {
    position: relative;
    z-index: 5;
    font-size: 36px;
    margin-right: 10px;
  }

  @media (min-width: 768px) {
    nav {
      height: initial;
      width: initial;
      position: initial;

      ul {
        color: #333;
        display: flex;
        flex-direction: row;

        li {
          cursor: pointer;
          text-decoration: none;
          & + li {
            margin-top: 0;
            margin-left: 4rem;
          }
          a {
            text-decoration: none;
            color: #333;
          }
        }
      }
    }

    svg {
      display: none;
    }

    ul {
      display: flex;
    }
  }

  @media (min-width: 992px) {
    padding: 0 20px;
  }
`;