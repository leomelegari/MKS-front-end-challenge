import { Container, ContainerHeader } from "./styles";
import Cart from "../../assets/images/cart.svg";

export const HeaderPage = () => {
  return (
    <Container>
      <ContainerHeader>
        <div className="container-logo">
          <p>
            <strong className="MKS-logo">MKS</strong> <span>sistemas</span>
          </p>
        </div>
        <div className="container-cart">
          <div className="cart-icon">
            <img src={Cart} alt="" />
          </div>
          <div className="cart-counter">0</div>
        </div>
      </ContainerHeader>
    </Container>
  );
};
