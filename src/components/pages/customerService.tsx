import HeaderSimple from "../headers/headerSimple";

const CustomerService = () => {
  return (
    <>
      <HeaderSimple />
      <div className="mt-20 mb-10 mx-5 flex flex-col items-center gap-6">
        <h1 className="font-bold text-2xl mb-6">Customer Service</h1>
        <div>
          <h2 className="font-semibold text-center mb-5">
            Promotions and discounts
          </h2>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col sm:flex-row gap-3">
              <img
                className="w-full sm:w-1/3 h-1/5 object-cover"
                src="https://marketplace.canva.com/EAFLtJa7Jqo/1/0/1600w/canva-red-creative-sale-promo-banner-A_Te0b9wP9o.jpg"
                alt="promo"
              />
              <p className="text-wrap text-sm">
                Etiam urna risus, volutpat at dapibus id, efficitur eu elit. In
                magna tortor, ultricies in mi ac, facilisis euismod quam. Fusce
                egestas, tortor eu euismod tincidunt, urna elit interdum diam, a
                dictum nisl nisi vel ante. Maecenas et libero ullamcorper,
                condimentum nulla vel, efficitur risus. Duis pretium nibh
                semper, iaculis massa volutpat, elementum velit. Sed placerat
                congue dui vitae vehicula. Vivamus in dictum massa.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
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
                src="https://static.vecteezy.com/system/resources/previews/008/575/284/original/loyalty-program-banner-outline-style-vector.jpg"
                alt="promo"
              />
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
        <div>
          <h2 className="font-semibold text-center mb-5">Delivery</h2>
          <p>
            Quisque nec lectus sed ante tristique dignissim. Suspendisse
            potenti. Nunc porttitor mi eget ligula faucibus vehicula. Maecenas
            tincidunt mi ac enim pulvinar porta. Nullam facilisis vel nisi sed
            efficitur. Integer sagittis sapien at interdum scelerisque. Nam
            pretium nulla vel ante sodales finibus. Aenean quis porta est, nec
            ullamcorper ipsum. Sed finibus consequat justo ac viverra. Aenean
            vitae commodo elit. Vivamus eget purus facilisis, ullamcorper magna
            ut, feugiat ante. In pharetra lorem in erat hendrerit pretium. Nulla
            consectetur eleifend pellentesque.
          </p>
        </div>
        <div>
          <h2 className="font-semibold text-center mb-5">Payment</h2>
          <p>
            Etiam aliquet elit sit amet velit ultrices, a commodo dolor auctor.
            Nam lorem tellus, maximus ut mi ut, gravida scelerisque ante.
            Praesent a felis elit. Etiam in est pretium, pretium augue in,
            efficitur lacus. Quisque tempus odio est, vitae feugiat nibh auctor
            vitae. Sed sed sem ornare, tempus massa ac, tempus nibh.
          </p>
        </div>
        <div>
          <h2 className="font-semibold text-center mb-5">Order tracking</h2>
          <p>
            Etiam urna risus, volutpat at dapibus id, efficitur eu elit. In
            magna tortor, ultricies in mi ac, facilisis euismod quam. Fusce
            egestas, tortor eu euismod tincidunt, urna elit interdum diam, a
            dictum nisl nisi vel ante.
          </p>
        </div>
      </div>
    </>
  );
};

export default CustomerService;
