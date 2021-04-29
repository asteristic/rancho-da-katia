import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  padding: 0 10px;
  color: var(--gray-200);
  background: #333;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-top: 3.125rem;
    font-size: 1.125rem;
    font-weight: 900;
    text-transform: uppercase;
  }

  p {
    width: 25rem;
    margin: 3.125rem 0;
  }

  h2 {
    width: 18rem;
    margin-bottom: 4.5rem;
    font-size: 1rem;
  }

  a {
    font-style: italic;
    font-weight: 600;
    color: var(--gray-200);
    text-decoration: none;
  }

  @media (min-width: 576px) {
    p {
      width: initial;
    }

    h2 {
      width: initial;
    }
  }
`;