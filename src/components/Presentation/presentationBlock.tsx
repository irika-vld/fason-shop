import PhotosBlock from "./photosBlock";
import Slider from "./slider";

const PresentationBlock = () => {
  return (
    <div className="flex gap-3">
      <div className="w-2/3 my-0 mx-auto">
        <Slider />
      </div>
      <div className="w-1/3">
        <PhotosBlock />
      </div>
    </div>
  );
};
export default PresentationBlock;
