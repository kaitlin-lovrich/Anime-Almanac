import { TitleData } from '../lib/dataTypes';

type TitleCardProps = {
  title: TitleData;
};

export default function TitleCard({ title }: TitleCardProps) {
  return (
    <div className="">
      <div className="w-44 mx-2">
        <img
          src={title.images.jpg.image_url}
          alt={`${title.title_english} image`}
          className="w-full h-56"
        />
      </div>
      <div className="bg-white mx-2 h-24">
        <div className="p-2">{title.title_english}</div>
      </div>
    </div>
  );
}
