import PhotosBlock from "./photosBlock";
import Slider from "./slider";

const PresentationBlock = () => {
  return (
    <div className="w-full flex flex-col sm:flex-row gap-3">
      <div className="w-full sm:w-2/3 my-0 mx-auto">
        <Slider />
      </div>
      <div className="w-full sm:w-1/3">
        <PhotosBlock />
      </div>
    </div>
  );
};
export default PresentationBlock;
