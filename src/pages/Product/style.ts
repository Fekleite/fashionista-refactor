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
  }
`;

export const Breadcrumb = styled.div`
  padding: 20px 0 0;
  font-size: 12px;
  color: #393939;

  a {
    text-decoration: underline;
    margin-right: 4px;
  }

  span {
    margin-left: 4px;
  }
`;

export const Content = styled.div`
  padding: 40px 0; 
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  > div {
    width: 50%;

    h2 {
      font-size: 25px;
      margin-bottom: 8px;
    }

    span {
      font-size: 20px;
      color: #393939;
    }

    button {
      margin-top: 20px;
      width: 100%;
      max-width: 280px;
      height: 48px;
      padding: 4px 8px;
      border: none;
      border-radius: 4px;
      background-color: #121111;
      color: #ffffff;
      font-size: 1.2em;
      outline: none;
      cursor: pointer;
    }
  }
`;

export const Sizes = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 16px 0;

  ul {
    margin-top: 8px;
    list-style: none;
    display: flex;
    gap: 4px;

    li {
      input {
        display: none;
      }

      input:disabled + label {
        opacity: 0.5;
        cursor: not-allowed;
      }

      input:checked + label {
        background-color: #121111;
        color: #ffffff;
      }

      label {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        margin-top: 8px;
        margin-right: 8px;
        border: 2px solid #121111;
        color: #121111;
        border-radius: 4px;
        background-color: transparent;
        font-size: 16px;
        font-weight: bold;
        outline: none;
        cursor: pointer;
      }
    }
  }
`;

export const PriceContainer = styled.div`
  display: flex;
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
