interface Props {
  title: string;
  price: number;
  image: string;
  category: string;
}

const Card = ({ title, price, image, category }: Props) => {
  return (
    <div className="flex flex-col h-full max-h-96 md:max-h-[32rem] min-h-56 w-full min-w-28 max-w-xs mb-2 border border-fuchsia-50">
      <div className="flex justify-center">
        <img
          className="object-contain h-64 md:h-80 w-full min-w-24 max-w-72"
          src={image}
          alt="product"
        />
      </div>

      <div className="px-1.5 flex flex-col justify-between h-full">
        <div>
          <h3 className="text-xs md:text-lg font-semibold text-wrap tracking-tighter sm:tracking-normal">
            {title}
          </h3>
          <span className="text-xs md:text-base text-zinc-700">{category}</span>
        </div>
        <div>
          <span className="text-sm md:text-lg font-extrabold self-end">
            $ {price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
