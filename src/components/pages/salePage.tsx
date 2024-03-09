import HeaderSimple from "../headers/headerSimple";

const SalePage = () => {
  return (
    <>
      <HeaderSimple />
      <div className="mt-20 mb-10 mx-5 flex flex-col items-center gap-6">
        <h1 className="font-bold text-2xl mb-6">Sale</h1>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col sm:flex-row gap-3">
            <img
              className="w-full sm:w-1/3 h-1/5 object-cover"
              src="https://marketplace.canva.com/EAFLtJa7Jqo/1/0/1600w/canva-red-creative-sale-promo-banner-A_Te0b9wP9o.jpg"
              alt="promo"
            />
            <div className="flex flex-col">
              <h2 className="font-semibold text-lg">Maecenas</h2>
              <p className="text-wrap text-sm">
                Etiam urna risus, volutpat at dapibus id, efficitur eu elit. In
                magna tortor, ultricies in mi ac, facilisis euismod quam.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row  gap-3">
            <img
              className="w-full sm:w-1/3 h-1/5 object-cover"
              src="https://img.freepik.com/free-vector/black-friday-sale-with-realistic-3d-paper-page_1361-3675.jpg"
              alt="promo"
            />
            <p className="text-wrap text-sm">
              Etiam aliquet elit sit amet velit ultrices, a commodo dolor
              auctor. Nam lorem tellus, maximus ut mi ut, gravida scelerisque
              ante. Praesent a felis elit. Etiam in est pretium, pretium augue
              in, efficitur lacus.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <img
              className="w-full sm:w-1/3 h-1/5 object-cover"
              src="https://previews.123rf.com/images/wildangel/wildangel1408/wildangel140800096/30878403-sale-on-clothes-in-the-retail-store.jpg"
              alt="promo"
            />
            <div className="flex flex-col">
              <h2 className="font-semibold text-lg">Elit Tellus</h2>
              <p className="text-wrap text-sm">
                Duis euismod libero a scelerisque pulvinar. Donec fermentum quis
                nisi nec pharetra. Donec pharetra elit tellus, a luctus libero
                facilisis ut. In porttitor ipsum nulla, quis maximus dui
                malesuada et. Quisque eu vulputate enim. Suspendisse aliquet
                elit scelerisque nulla ultrices, in sagittis arcu semper.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SalePage;
