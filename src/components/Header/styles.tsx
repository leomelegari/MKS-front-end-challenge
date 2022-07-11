import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 70px;
  background-color: #0f52ba;

  @media (min-width: 768px) {
    height: 100px;
  }
`;

export const ContainerHeader = styled.div`
  max-width: 1440px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  padding: 0 10px;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 768px) {
    padding: 0 50px;
  }

  .container-logo {
    color: white;
    cursor: default;
    strong {
      font-size: 40px;
      font-weight: 600;
    }
    span {
      font-weight: 200;
      font-size: 20px;
    }
  }

  .container-cart {
    width: 90px;
    height: 45px;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.2s;

    :hover {
      filter: brightness(0.8);
    }

    .cart-icon {
      display: flex;
    }

    .cart-counter {
      font-size: 18px;
      font-weight: bold;
    }
  }
`;
