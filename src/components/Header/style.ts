import styled from 'styled-components';

export const HeaderComponent = styled.header`
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background-color: #000;
  color: #FFF;
  transition: all 0.3s;

  > div {
    width: 100%;
    max-width: 1280px;
    height: 100%;
    margin: 0 auto;
    padding: 0 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      font-size: 24px;
      text-transform: uppercase;
    }
  }
`;

export const ButtonsContainer = styled.div`
  width: 64px;
  display: flex;
  justify-content: space-between;

  button {
    border: none;
    background-color: transparent;
    outline: none;
    cursor: pointer;
    position: relative;
  }
`