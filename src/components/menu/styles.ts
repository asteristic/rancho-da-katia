import styled from 'styled-components';

export const Container = styled.section`
  width: calc(100% - 20px);
  margin: 0 10px;
  padding-top: 2.62rem;

  h3 {
    font-family: 'Great Vibes', cursive;
    font-size: 4rem;
    color: var(--gray-300);
  }

  h2 {
    margin-top: -1.7rem;
    margin-bottom: 1rem;
    font-size: 2rem;
    font-weight: 900;
    text-transform: uppercase;
  }

  @media (min-width: 420px) {
    width: calc(100% - 40px);
    margin: 0 20px;
  }

  @media (min-width: 576px) {
    width: 70%;
    margin: 0 auto;
  }

  @media (min-width: 992px) {
    width: 100%;
    max-width: 1180px;
    padding: 0 80px;
    padding-top: 2.62rem;

    article {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      grid-gap: 1.5rem;
    }
  }

  @media (min-width: 1200px) {

    article {
      grid-gap: 3rem;
    }
  }
`;

export const MenuItem = styled.div`
  height: 60vw;
  width: 100%;
  border-radius: 10px;
  position: relative;
  overflow: hidden;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }

  div {
    height: 3.125rem;
    width: 100%;
    background: rgba(253, 253, 253, 0.5);
    backdrop-filter: blur(3px);

    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    p {
      font-size: 1rem;
      font-weight: 900;
      text-transform: uppercase;
      letter-spacing: 2px;
    }
  }

  & + div {
    margin-top: 1rem;
  }

  @media (min-width: 576px) {
    height: 45vw;

    & + div {
      margin-top: 2rem;
    }
  }

  @media (min-width: 992px) {
    height: 18rem;

    & + div {
      margin-top: initial;
    }
  }
`;

export const Button = styled.button`
  height: 3.75rem;
  width: 16rem; 
  margin: 0 auto;
  margin-top: 1.25rem;
  margin-bottom: 2.81rem;
  border: none;
  border-radius: 30px;
  background: var(--red);

  font-size: 1.125rem;
  font-weight: 900;
  letter-spacing: 1px;
  color: var(--white);
  text-transform: uppercase;

  display: block;

  @media (min-width: 576px) {
    margin-top: 2rem;
  }

  @media (min-width: 1200px) {
    margin-bottom: 3.75rem;
  }
`;

