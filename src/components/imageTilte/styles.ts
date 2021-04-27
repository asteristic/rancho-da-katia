import styled from 'styled-components';

interface ContainerProps {
  backgroundImage: string
}

export const Container = styled.section<ContainerProps>`
  height: 20rem;
  width: 100%;
  background: url(${props => props.backgroundImage}) no-repeat center center / cover;

  color: #fff;

  span {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    h6 {
      font-family: 'Great Vibes', cursive;
      font-size: 4rem;
      text-align: center;
    }

    div {
      height: 1px;
      width: calc(100% - 40px);
      background: var(--white);
    }

    h4 {
      margin-top: 5px;
      text-align: center;
      font-size: 2rem;
      font-weight: 700;
      text-transform: uppercase;
    }
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;



  @media (min-width: 576px) {
    span {

      div {
        width: 37rem;
      }
    }
  }
`;