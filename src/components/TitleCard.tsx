import { TitleData } from '../lib/dataTypes';
import '../index.css';

type TitleCardProps = {
  title: TitleData;
};

export default function TitleCard({ title }: TitleCardProps) {

  return (
    <>
      <div className="w-36 md:w-40 lg:w-44 mx-2">
        <img
          src={title.images.jpg.image_url}
          alt={`${title.title_english} image`}
          className="w-full h-48 md:h-52 lg:h-56 rounded-t-md"
        />
      </div>
      <div className="bg-[rgba(78,54,54,0.85)] mx-2 w-36 md:w-40 lg:w-44 h-20 md:h-24 shadow-custom-inset rounded-b-md">
        <p className="px-3 py-1 md:py-2 mx-auto cursor-pointer text-sm md:text-base text-[rgb(176,176,176)] tracking-wider multiline-truncate h-full">
          {title.title_english}
        </p>
      </div>
    </>
  );
}

