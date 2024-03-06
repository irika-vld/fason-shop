import { useAppSelector } from "../../hooks/redux";
import { ICardDetails } from "../../interfaces/interfaces";
import Card from "../card";
import HeaderPages from "../headers/headerPages";
import ProductDetails from "../productDetails";

const Favorites = ({
  detailsIsOpenHandler,
  isDetailOpen,
  setIsDetailsOpen,
  cardId,
}: ICardDetails) => {
  const favorites = useAppSelector((state) => state.favorites.favorites);

  return (
    <>
      <HeaderPages />
      <div className="flex flex-col justify-center items-center mt-20 mx-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-1.5 gap-y-1.5 sm:gap-y-6 xl:w-4/5 mb-10">
          {favorites?.map((product) => (
            <Card
              key={product.id}
              {...product}
              detailsIsOpenHandler={detailsIsOpenHandler}
            />
          ))}
        </div>
      </div>
      {isDetailOpen && (
        <div className="w-full h-screen fixed top-0 left-0 bg-black bg-opacity-50">
          <ProductDetails setIsDetailsOpen={setIsDetailsOpen} cardId={cardId} />
        </div>
      )}
    </>
  );
};

export default Favorites;
