import { Container, ContainerHeader } from "./styles";
import CartIcon from "../../assets/images/cart.svg";
import { useState } from "react";
import { Cart } from "../Cart";

export const HeaderPage = () => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <Container>
      <ContainerHeader>
        <div className="container-logo">
          <p>
            <strong className="MKS-logo">MKS</strong> <span>sistemas</span>
          </p>
        </div>
        {sidebar ? (
          <Cart setSidebar={setSidebar} sidebar={sidebar} />
        ) : (
          <div className="container-cart" onClick={() => setSidebar(!sidebar)}>
            <div className="cart-icon">
              <img src={CartIcon} alt="" />
            </div>
            <div className="cart-counter">0</div>
          </div>
        )}
      </ContainerHeader>
    </Container>
  );
};
