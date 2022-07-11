import { HeaderPage } from "./components/Header/Header";
import { Products } from "./components/Products";
import Global from "./styles/global";

function App() {
  return (
    <>
      <Global />
      <HeaderPage />
      <Products />
    </>
  );
}

export default App;
