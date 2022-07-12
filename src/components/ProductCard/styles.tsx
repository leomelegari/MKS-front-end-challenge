import styled from "styled-components";

export const Container = styled.div`
  width: 215px;
  height: 350px;
  display: flex;
  background-color: white;
  flex-direction: column;
  align-items: center;
  padding-top: 5px;
  margin: 10px 10px;
  justify-content: center;
  box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.11);
  -webkit-box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.11);
  -moz-box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.11);
  border-radius: 10px;
  transition: 0.2s;

  :hover {
    transform: scale(1.02);
  }
`;

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 0 10px;
  cursor: default;

  .image {
    width: 100%;
    height: 180px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 5px;

    img {
      width: 120px;
      height: 120px;
    }
  }

  .title-price {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .title {
      width: 140px;
      font-size: 16px;
      line-height: 20px;
    }

    .price {
      width: 75px;
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
    }
  }

  .description {
    width: 100%;
    display: flex;
    margin: 15px 0;
    /* justify-content: center; */

    p {
      max-width: 192px;
      font-size: 10px;
      line-height: 15px;
      /* max-width: 15ch;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap; */
    }
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  width: 100%;
  height: 31px;
  cursor: pointer;
  border-radius: 0px 0px 7px 7px;
  background-color: #0f52ba;
  justify-content: center;
  align-items: center;
  color: white;
  text-transform: uppercase;
  transition: 0.2s;

  :hover {
    filter: brightness(0.8);
  }

  .button {
    display: flex;
    align-items: center;
  }

  img {
    margin-right: 15px;
  }
`;
