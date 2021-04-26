import styled from 'styled-components';

export const Container = styled.section`
  width: calc(100% - 20px);
  margin: 0 10px;
  padding-top: 2.62rem;


  div {
    display: flex;
    flex-direction: column;
    align-items: center;

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

    p {
      margin-bottom: 1rem;
    }

    a {
      margin-bottom: 2rem;
      padding-bottom: 15px;
      text-transform: uppercase;
      color: var(--gray-300);
      text-decoration: none;

      border-bottom: 1px solid black;
      display: block;
    }
  }

  img {
    width: 100%;
    margin-bottom: 4rem;
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
    margin-bottom: 4rem;
    padding: 0 80px;
    padding-top: 2.62rem;

    display: flex;

    div {
      align-items: center;
      justify-content: space-between;

      > div {
        margin-top: -1rem;
      }

      p {
        margin-bottom: initial;
        margin-right: 20px;
      }

      a {
        margin-bottom: -1rem;
      }
    }

    img {
      width: 50%;
      margin-bottom: initial;
    }
  }
`;