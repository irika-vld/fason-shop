import { useParams } from "react-router-dom";
import { useGetCategoryByTitleQuery } from "../../services/productsService";
import { categoriesData } from "../../assets/data";
import HeaderPages from "../headers/headerPages";
import Card from "../card";
import ProductDetails from "../productDetails";
import { Grid } from "react-loader-spinner";
import { ICardDetails } from "../../interfaces/interfaces";

const CategoryPage = ({
  detailsIsOpenHandler,
  isDetailOpen,
  setIsDetailsOpen,
  cardId,
}: ICardDetails) => {
  const { title } = useParams();
  const { data, isLoading } = useGetCategoryByTitleQuery(title);
  const currentBanner = categoriesData.find((el) => el.tag === title);

  return (
    <>
      <HeaderPages />
      <div className="flex flex-col justify-center items-center mt-20 mx-5">
        <div className="grid grid-rows-8 grid-cols-6 gap-1 md:gap-2 h-72 md:h-96 mb-10">
          <img
            className="w-full h-full row-span-5 col-span-7 md:col-span-5 object-cover"
            src={currentBanner?.img1}
            alt="banner"
          />
          <img
            className="w-full h-full row-span-3 col-end-2 md:row-span-5 md:col-end-7 col-span-1 object-cover"
            src={currentBanner?.img2}
            alt="banner"
          />
          <img
            className="w-full h-full row-span-3 col-end-4 md:col-end-3 col-span-2 object-cover"
            src={currentBanner?.img3}
            alt="banner"
          />
          <img
            className="w-full h-full row-span-3 col-end-6 md:col-end-5 col-span-2 object-cover"
            src={currentBanner?.img4}
            alt="banner"
          />
          <img
            className="w-full h-full row-span-3 col-end-7 col-span-1 md:col-span-2 object-cover"
            src={currentBanner?.img5}
            alt="banner"
          />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-1.5 gap-y-1.5 sm:gap-y-6 xl:w-4/5 mb-10">
          {isLoading && (
            <Grid
              visible={true}
              height="30"
              width="30"
              color="#c213b9"
              ariaLabel="grid-loading"
              radius="12.5"
              wrapperStyle={{}}
              wrapperClass="flex h-full justify-center items-center"
            />
          )}
          {data?.map((product) => (
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

export default CategoryPage;
