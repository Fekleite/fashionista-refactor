import styled from 'styled-components';

export const FooterComponent = styled.footer`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #121111;

  p {
    color: #FFF;
    margin-bottom: 8px;
  }

  > div {
    display: flex;
    justify-content: space-between;
  }
`;