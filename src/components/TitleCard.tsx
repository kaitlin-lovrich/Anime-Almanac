import { TitleData } from '../lib/dataTypes';

type TitleCardProps = {
  title: TitleData;
};

export default function TitleCard({ title }: TitleCardProps) {
  function shortenTitle(title: string) {
    const maxLength = 28;
    if (title.length <= maxLength) {
      return title;
    } else {
      return title.substring(0, maxLength) + '...';
    }
  }

  return (
    <div>
      <div className="w-44 mx-2">
        <img
          src={title.images.jpg.image_url}
          alt={`${title.title_english} image`}
          className="w-full h-56 rounded-t-md"
        />
      </div>
      <div className="bg-[rgba(78,54,54,0.85)] mx-2 h-24 shadow-custom-inset rounded-b-md ">
        <p className="px-4 py-2 w-40 cursor-pointer text-[rgb(176,176,176)] tracking-wider">
          {shortenTitle(title.title_english)}
        </p>
      </div>
    </div>
  );
}

// Make ttile cards smaller at mobile, and md screen sizes
