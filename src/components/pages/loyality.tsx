import HeaderSimple from "../headers/headerSimple";

const Loyality = () => {
  return (
    <>
      <HeaderSimple />
      <div className="mt-20 mb-10 mx-5 flex flex-col items-center gap-2">
        <h1 className="font-bold text-2xl mb-6">Club</h1>
        <div>
          <h2 className="font-semibold text-center mb-5">Loyality Programm</h2>
          <div className="flex flex-col gap-3">
            <div className="flex gap-3">
              <img
                className="w-1/3 h-1/5 object-cover"
                src="https://t3.ftcdn.net/jpg/04/24/14/14/360_F_424141428_tOehgkc9x59RPsWkUzG4hf3Zdvn1PuN8.jpg"
                alt="loyality"
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
            <div className="flex gap-3">
              <img
                className="w-1/3 h-1/5 object-cover"
                src="https://static.vecteezy.com/system/resources/previews/008/575/284/original/loyalty-program-banner-outline-style-vector.jpg"
                alt="loyality"
              />
              <p className="text-wrap text-sm">
                Etiam aliquet elit sit amet velit ultrices, a commodo dolor
                auctor. Nam lorem tellus, maximus ut mi ut, gravida scelerisque
                ante. Praesent a felis elit. Etiam in est pretium, pretium augue
                in, efficitur lacus.
              </p>
            </div>
            <div className="flex gap-3">
              <p className="text-wrap text-sm">
                Duis euismod libero a scelerisque pulvinar. Donec fermentum quis
                nisi nec pharetra. Donec pharetra elit tellus, a luctus libero
                facilisis ut. In porttitor ipsum nulla, quis maximus dui
                malesuada et. Quisque eu vulputate enim. Suspendisse aliquet
                elit scelerisque nulla ultrices, in sagittis arcu semper.
              </p>
              <p className="text-wrap text-sm">
                Duis euismod libero a scelerisque pulvinar. Donec fermentum quis
                nisi nec pharetra. Donec pharetra elit tellus, a luctus libero
                facilisis ut. In porttitor ipsum nulla, quis maximus dui
                malesuada et.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loyality;
