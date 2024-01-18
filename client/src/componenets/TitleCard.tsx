import { TitleData } from '../lib/dataTypes';
import './TitleCard.css';

type TitleCardProps = {
  title: TitleData;
};

export default function TitleCard({ title }: TitleCardProps) {
  return (
    <div className="title-card">
      <div className="image-container">
        <img
          src={title.images.jpg.image_url}
          alt={`${title.title_english} image`}
        />
      </div>
      <div>{title.title_english}</div>
    </div>
  );
}
