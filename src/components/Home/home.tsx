// import { useEffect } from "react";
// import { fetchProducts } from "../../store/reducers/actionCreators";
import Card from "../Card/card";
// import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { productsApi } from "../../services/productsService";

const Home = () => {
  // const dispatch = useAppDispatch();
  // const { products, isLoading, error } = useAppSelector(
  //   (state) => state.products
  // );

  const {data, isLoading, error} = productsApi.useGetProductQuery(null)

  // useEffect(() => {
  //   dispatch(fetchProducts());
  // }, [dispatch]);

  return (
    <div className="mt-20 mb-5 px-1 sm:px-5 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-x-1.5 gap-y-1.5 sm:gap-y-6">
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>An error occured: {error.error}</h2>}
      {data?.map((product) => (
        <Card key={product.id} {...product} />
      ))}
    </div>
  );
};

export default Home;
