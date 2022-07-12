import Logo from "../../assets/images/apple-watch.png";
import { Container, ContainerButton, ContainerInfo } from "./styles";

import Bag from "../../assets/images/shopping-bag.svg";

export const ProductCard = () => {
  return (
    <Container>
      <ContainerInfo>
        <div className="image">
          <img src={Logo}></img>
        </div>
        <div className="title-price">
          <div className="title">
            <p>Apple watch apple watch</p>
          </div>
          <div className="price">
            <p>R$250</p>
          </div>
        </div>
        <div className="description">
          <p>Redesigned from scratch and completely revised.</p>
        </div>
      </ContainerInfo>
      <ContainerButton>
        <div className="button">
          <img src={Bag} alt="" />
          <span>Comprar</span>
        </div>
      </ContainerButton>
    </Container>
  );
};
