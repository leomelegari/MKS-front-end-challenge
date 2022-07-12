import styled from "styled-components";

export const Container = styled.div`
  .nav-menu {
    background-color: #0f52ba;
    width: 100%;
    max-width: 486px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    position: fixed;
    top: 0;
    right: 0%;
    transition: 0.3s;
    box-shadow: -5px 0px 9px -4px rgba(0, 0, 0, 0.51);
    -webkit-box-shadow: -5px 0px 9px -4px rgba(0, 0, 0, 0.51);
    -moz-box-shadow: -5px 0px 9px -4px rgba(0, 0, 0, 0.51);

    @media (min-width: 375px) {
      width: 85%;
    }
    @media (min-width: 768px) {
      width: 486px;
    }
  }

  .nav-menu.active {
    right: 0;
    transition: 0.3s;
  }

  .nav-menu-items {
    width: 100%;
    height: 80%;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .navbar-header {
    width: 100%;
    height: 110px;
    display: flex;
    background-color: #0f52ba;
    padding: 0 25px;
    justify-content: space-between;
    align-items: center;

    svg {
      font-size: 35px;
      color: white;
      cursor: pointer;
      transition: 0.2s;

      :hover {
        transform: scale(1.02);
        filter: brightness(0.8);
        color: red;
      }
    }

    span {
      width: 180px;
      color: white;
      font-weight: 700;
      font-size: 27px;
    }
  }

  .total,
  .pay {
    display: flex;
    align-items: center;
    height: 10%;

    span {
      color: white;
      font-size: 23px;
      font-weight: 600;
    }
  }

  .total {
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
  }

  .pay {
    justify-content: center;
    background-color: black;
  }
`;

export const ContainerItem = styled.div`
  width: 90%;
  position: relative;
  display: flex;
  background-color: white;
  flex-direction: column;
  align-items: center;
  padding: 5px 0;
  margin: 13px 0px;
  justify-content: center;
  box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.11);
  -webkit-box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.11);
  -moz-box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.11);
  border-radius: 10px;
  transition: 0.2s;

  :hover {
    transform: scale(1.02);
  }

  svg {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 25px;
  }

  @media (min-width: 504px) {
    svg {
      top: -10px;
      right: -10px;
      padding: 4px;
      background-color: black;
      color: white;
      border-radius: 50%;
    }
  }
`;

export const ContainerItemInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0 15px;
  cursor: default;

  @media (min-width: 504px) {
    flex-direction: row;
    align-items: center;
    padding: 15px;
  }

  .image {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 5px;

    @media (min-width: 504px) {
      width: 60%;
    }

    img {
      width: 80px;

      @media (min-width: 504px) {
        width: 60px;
      }
    }
  }

  .title-price {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;

    @media (min-width: 504px) {
      width: 80%;
      padding: 0;
    }

    .title {
      width: 100%;
      text-align: start;
      font-size: 16px;
      font-weight: 400;
      line-height: 20px;
    }
  }

  .container-quantity {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 10px;

    @media (min-width: 504px) {
      padding: 0;
    }

    .quantity {
      width: 40%;
      display: flex;
      justify-content: space-around;
      border: 1px solid #bfbfbf;
      border-radius: 5px;

      div {
        width: 33%;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .middle {
        border-left: 1px solid #bfbfbf;
        border-right: 1px solid #bfbfbf;
        font-size: 13px;
      }
    }

    .price {
      width: 40%;
      height: 26px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #373737;
      border-radius: 5px;

      p {
        color: white;
        font-size: 15px;
        font-weight: bold;
      }

      @media (min-width: 504px) {
        background-color: transparent;
        p {
          color: black;
          font-size: 21px;
        }
      }
    }
  }
`;
