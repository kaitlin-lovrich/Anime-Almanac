import { TitleData } from '../lib/dataTypes';
import '../index.css';

type TitleCardProps = {
  title: TitleData;
};

export default function TitleCard({ title }: TitleCardProps) {

  return (
    <>
      <div className="w-36 sm:w-44 mx-2">
        <img
          src={title.images.jpg.image_url}
          alt={`${title.title_english} image`}
          className="w-full h-48 sm:h-56 rounded-t-md"
        />
      </div>
      <div className="bg-[rgba(78,54,54,0.85)] mx-2 h-20 sm:h-24 shadow-custom-inset rounded-b-md ">
        <p className="px-2.5 py-1 sm:p-2 mx-auto w-36 sm:w-40 cursor-pointer text-sm sm:text-base text-[rgb(176,176,176)] tracking-wider multiline-truncate h-full">
          {title.title_english}
        </p>
      </div>
    </>
  );
}

// Make ttile cards smaller at mobile, and md screen sizes
