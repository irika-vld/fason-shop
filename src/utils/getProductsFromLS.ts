export const getProductsFromLS = () => {
  const data = localStorage.getItem("cart");
  return data ? JSON.parse(data) : [];
};
