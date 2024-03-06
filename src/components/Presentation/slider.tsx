import { useState } from "react";
import { banners } from "../../assets/data";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const banner = banners.map((banner) => banner);

  const goToPrevious = () => {
    const firstBanner = currentIndex === 0;
    const newIndex = firstBanner ? banners.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const lastBanner = currentIndex === banners.length - 1;
    const newIndex = lastBanner ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToBanner: (index: number) => void = (bannerIndex) => {
    setCurrentIndex(bannerIndex);
  };

  return (
    <div className="h-full relative">
      <div
        className="min-h-44 h-full w-full bg-center bg-cover duration-300 cursor-pointer"
        style={{ backgroundImage: `url(${banner[currentIndex].img})` }}
      ></div>
      <div className="absolute bottom-2 right-1">
        <button className="cursor-pointer" onClick={goToPrevious}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 stroke-slate-500 hover:stroke-fuchsia-700"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
            />
          </svg>
        </button>
        <button className="cursor-pointer" onClick={goToNext}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 stroke-slate-500 hover:stroke-fuchsia-700"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
      <div className="flex absolute bottom-3 left-2">
        {banners.map((el, index) => (
          <div
            key={el.id}
            onClick={() => goToBanner(index)}
            className="cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className={`w-3 h-3 ${
                currentIndex === index ? "fill-fuchsia-700" : "fill-slate-500"
              } hover:fill-fuchsia-700`}
            >
              <path
                fillRule="evenodd"
                d="M4.5 7.5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-9Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
