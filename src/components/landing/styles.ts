import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 95px);
  background: url('menu/menu-01.png') no-repeat center center / cover;

  color: #fff;

  span {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    h6 {
      font-family: 'Great Vibes', cursive;
      font-size: 96px;
      text-align: center;
    }

    div {
      height: 2px;
      width: 600px;
      background: #fff;
    }

    h1 {
      margin-top: 20px;
      text-align: center;
      font-size: 48px;
      font-weight: 700;
      text-transform: uppercase;
    }
  }

 

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  img {
    width: 160px;
    cursor: pointer;
    position: absolute;
    bottom: -14px;
  }
`;