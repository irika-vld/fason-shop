import { photos } from "../../assets/data";

const PhotosBlock = () => {
  return (
    <div className="h-full w-full grid grid-cols-2 gap-1">
      {photos.map((photo) => (
        <div key={photo.id} className="relative cursor-pointer overflow-hidden">
          <img
            src={photo.img}
            alt={photo.tag}
            className="cover bg-center h-full w-full duration-200 hover:scale-110"
          />
          <span className="uppercase absolute bottom-1 right-1 text-white drop-shadow-lg shadow-black font-bold tracking-wider">
            {photo.tag}
          </span>
        </div>
      ))}
    </div>
  );
};

export default PhotosBlock;
