import { addProduct } from "./actions";

export const addproductsThunk = (product: any) => (dispatch: any) => {
  const list = JSON.parse(localStorage.getItem("cart") as string) || [];
  const newList = [...list, product];

  localStorage.setItem("cart", JSON.stringify(newList));

  dispatch(addProduct(product));
};
