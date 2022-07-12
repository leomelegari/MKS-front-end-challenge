import { useMemo, useState } from "react";
import api from "../../services/api";
import { ProductCard } from "../ProductCard/ProductCard";
import { Container } from "./styles";

export const Products = () => {
  const [data, setData] = useState<any>([]);
  useMemo(async () => {
    await api
      .get("products?page=1&rows=15&sortBy=id&orderBy=DESC")
      .then((response) => setData(response.data.products));
  }, []);

  // const dispatch = useDispatch();
  // const cart = useSelector((state) => state);
  return (
    <Container>
      {data.map((product: any, index: number) => {
        return (
          <ProductCard
            key={index}
            name={product.name}
            price={product.price}
            photo={product.photo}
            description={product.description}
          />
        );
      })}
    </Container>
  );
};
