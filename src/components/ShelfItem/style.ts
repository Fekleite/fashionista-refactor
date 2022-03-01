import styled from 'styled-components';

export const Container = styled.li`
  list-style: none;
  padding: 16px 8px;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 2px 3px 13px -1px rgba(100, 100, 100, 0.475);

  h4 {
    margin-top: 16px;
    font-size: 20px;
    text-transform: uppercase;
    text-align: center;
  }
`;

export const Stack = styled.div`
  position: relative;

  span {
    position: absolute;
    top: 6px;
    right: 0;

    padding: 8px 4px;
    margin-right: 12px;
    font-size: 0.9em;
    font-weight: bold;
    text-align: center;
    color: #ffffff;
    background-color: #121111;
  }

  img {
    width: 100%;
    max-width: 384px;
  }
`;

export const PriceContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 6px;
  margin-top: 8px;

  span {
    font-style: italic;
    color: #777777;
    text-decoration: line-through;
  }

  strong {
    color: #393939;
  }
`;