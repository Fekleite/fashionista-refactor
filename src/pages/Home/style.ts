import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-top: 80px;

  > div {
    width: 100%;
    max-width: 1280px;
    height: 100%;
    margin: 0 auto;
    padding: 0 16px;

    ul {
      display: flex;
      gap: 24px;
      flex-wrap: wrap;

      padding: 40px 0;
    }
  }
`;
