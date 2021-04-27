import styled from 'styled-components';

interface ContainerProps {
  photo: string
}

export const Container = styled.article<ContainerProps>`
  width: calc(100% - 40px);
  max-width: 470px;
  margin: 0 auto;
  padding: 10px;
  background: var(--gray-001);
  border-radius: 10px;

  div {
    height: 60vw;
    width: 100%;
    background: url(${props => props.photo}) no-repeat center center / cover;
    border-radius: 10px;
  }

  main {

    h2 {
      margin-top: 1rem;
      margin-bottom: 2rem;
      font-size: 1.125rem;
      font-weight: 600;
      text-transform: uppercase;
    }

    p {
      margin-bottom: 2.625rem;
    }

    span {
      display: block;
      font-weight: bold;
      text-align: left;
    }

  }

  & + article {
    margin-top: 2rem;
  }

  @media (min-width: 576px) {
    div {
      height: 50vw;
    }
  }
  
  @media (min-width: 768px) {
    max-width: 992px;
    display: flex;
    padding: 0;
    background: initial;

    div {
      height: 300px;
      width: 100%;
      border-radius: 10px 0 0 10px;
    }

    main {
      padding: 10px 10px 10px 2rem;
      background: var(--gray-001);
      border-radius: 0 10px 10px 0;

      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
`;