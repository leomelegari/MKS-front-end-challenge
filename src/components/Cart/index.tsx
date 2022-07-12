import { FaTimes } from "react-icons/fa";
import { CartItems } from "./cartItems";
import { Container } from "./styles";

interface CartProps {
  sidebar: boolean;
  setSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Cart = ({ sidebar, setSidebar }: CartProps) => {
  const hideSidebar = () => setSidebar(!sidebar);

  return (
    <Container>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <div className="navbar-header">
          <span>Carrinho de compras</span>
          <FaTimes onClick={() => hideSidebar()} />
        </div>
        <div className="nav-menu-items" style={{}}>
          <CartItems />
          <CartItems />
          <CartItems />
        </div>
        <div className="total">
          <span>Total:</span>
          <span>R$ 750</span>
        </div>
        <div className="pay">
          <span>Finalizar Compra</span>
        </div>
      </nav>
    </Container>
  );
};
