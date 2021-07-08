import styled from 'styled-components';

export const Container = styled.section`
  width: calc(100% - 20px);
  margin: 0 10px;
  padding: 3rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    margin-bottom: 2rem;

    display: flex;
    flex-direction: column;
    justify-content: center;

    h4 {
      font-family: 'Great Vibes', cursive;
      font-size: 4rem;
      color: var(--gray-300);
    }

    h5 {
      margin-top: -1.7rem;
      margin-bottom: 1rem;
      font-size: 2rem;
      font-weight: 900;
      text-transform: uppercase;
    }

    h2, h3 {
      font-size: 1.125rem;
      margin-bottom: 0.5rem;
    }
  }

  iframe {
    height: 80vh;
    width: 100%;
    border: none;
  }

  @media (min-width: 576px) { 
    width: calc(100% - 40px);
    margin: 0 20px;
  }

  @media (min-width: 762px) { 
    width: calc(100% - 80px);
    max-width: 992px;
    margin: 0 40px;
  }

  @media (min-width: 992px) {
    flex-direction: row;
    margin: 0 auto;

    div {
      width: 40%;
    }

    iframe {
      height: 60vh;
      width: 60%;
    }
  }
`;
