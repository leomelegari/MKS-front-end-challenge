import { FaTimes } from "react-icons/fa";
import Logo from "../../assets/images/apple-watch.png";
import { ContainerItem, ContainerItemInfo } from "./styles";

export const CartItems = () => {
  return (
    <ContainerItem>
      <FaTimes />
      <ContainerItemInfo>
        <div className="image">
          <img src={Logo} />
        </div>
        <div className="title-price">
          <div className="title">
            <p>Apple Watch Series 4 GPS</p>
          </div>
        </div>
        <div className="container-quantity">
          <div className="quantity">
            <div className="minus"> - </div>
            <div className="middle"> 1 </div>
            <div className="plus"> + </div>
          </div>
          <div className="price">
            <p>R$250</p>
          </div>
        </div>
      </ContainerItemInfo>
    </ContainerItem>
  );
};
