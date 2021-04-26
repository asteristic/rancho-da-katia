import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  color: white;
  background: url("menu/menu-07.jpg") no-repeat center center / cover;

  div {
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.7);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
      margin: 3.125rem 0;
      font-size: 1.25rem;
      font-weight: 700;
      color: white;
      letter-spacing: 3px;
    }

    h1 {
      margin-bottom: 2rem;
      font-size: 2.625rem;
      font-weight: 700;
      color: var(--gray-200);
    }

    span {
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
          margin-right: 5px;
          font-size: 2.5rem;
      }

      h2 {
        font-size: 2rem;
        font-weight: 300;
      }
    }

    ul {
      margin-top: 2.5rem;
      margin-bottom: 3rem;
      list-style: none;
      display: flex;

      li {

        svg {
          font-size: 1.875rem;
        }

        & + li {
          margin-left: 2rem;
        }
      }
    }

  }
`;