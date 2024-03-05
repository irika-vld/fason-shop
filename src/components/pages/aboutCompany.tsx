import HeaderSimple from "../headers/headerSimple";

const AboutCompany = () => {
  return (
    <>
      <HeaderSimple />
      <div className="flex flex-col items-center mt-20 mb-10 mx-5 gap-2">
        <h1 className="font-bold text-2xl mb-6">About us</h1>
        <div className="grid grid-rows-3 grid-cols-2 gap-6">
          <img
            src="https://img.freepik.com/free-psd/silver-letters-on-glass-building-facade_145275-162.jpg?size=626&ext=jpg&ga=GA1.1.632798143.1708300800&semt=ais"
            alt="company"
            className="object-cover"
          />
          <p className="font-semibold text-xl">
            Nam eu tempus augue, at ornare erat. Aliquam et augue eget enim
            rutrum dignissim. Maecenas sagittis augue vitae lacus sagittis
            feugiat. Integer dictum, est at pretium vulputate, urna felis
            fermentum augue, a cursus massa nisi id libero.
          </p>

          <p className="text-2xl">
            Vestibulum tincidunt interdum ultrices. Integer sit amet arcu in
            purus congue pretium. Mauris imperdiet hendrerit purus, in
            ullamcorper neque tempus vitae. Ut imperdiet lacus nec diam
            tristique, sit amet vestibulum velit volutpat. Etiam nec purus
            consectetur, varius nibh eu, finibus diam. Etiam eros turpis,
            pulvinar bibendum fringilla vel, maximus eget felis. Cras eget
            euismod nunc. Praesent iaculis tellus molestie ipsum ultrices
            fringilla. Fusce eget augue ex. Vestibulum eleifend erat orci, sit
            amet facilisis tellus tempor non. Fusce sit amet magna ullamcorper
            arcu molestie suscipit.
          </p>
          <img
            src="https://www.legalzoom.com/sites/lz.com/files/sitemap/What%20is%20inc.%20in%20a%20company%20name.jpg"
            alt="company"
            className="object-cover"
          />

          <img
            src="https://www.wework.com/ideas/wp-content/uploads/sites/4/2017/06/Web_150DPI-20190927_10th_Floor_Conference_Room_2_v1-1120x630.jpg"
            alt="company"
            className="object-cover"
          />
          <p>
            Integer dapibus aliquam arcu. Phasellus erat justo, iaculis vitae
            ultrices ac, ultricies vel dolor. Pellentesque dictum tincidunt
            risus, a cursus lorem ullamcorper sagittis. Cras pulvinar porta
            nunc, ut vehicula tellus ultrices sed. Duis ut viverra odio.
            Vestibulum lectus nibh, ultrices pharetra velit eget, egestas
            placerat arcu. Phasellus sagittis sapien quam, et porttitor nisi
            varius et. Maecenas mattis, ligula vitae consequat convallis, augue
            nisi ultricies nulla, a ullamcorper ante velit nec dui. In quis
            risus nibh
          </p>
        </div>
        <div>
          <div className="flex flex-col gap-2 items-center">
            <span>0 000 000 00 00</span>
            <span>shopfason@fas.on</span>
            <span>111111, Lorem, Adipiscing elit, ac feugiat, 112</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutCompany;
