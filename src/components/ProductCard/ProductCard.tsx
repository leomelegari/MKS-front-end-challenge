import Logo from "../../assets/images/apple-watch.png";
import { Container, ContainerButton, ContainerInfo } from "./styles";

import Bag from "../../assets/images/shopping-bag.svg";

interface ProductProps {
  name: string;
  price: number;
  photo: string;
  description: string;
}

export const ProductCard = ({
  description,
  name,
  photo,
  price,
}: ProductProps) => {
  return (
    <Container>
      <ContainerInfo>
        <div className="image">
          <img src={photo} />
        </div>
        <div className="title-price">
          <div className="title">
            <p>{name}</p>
          </div>
          <div className="price">
            <p>R${Number(price).toFixed(0)}</p>
          </div>
        </div>
        <div className="description">
          <p>{description}</p>
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
