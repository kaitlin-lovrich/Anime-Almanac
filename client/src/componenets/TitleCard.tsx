import { Title } from '../lib/dataTypes';
import './TitleCard.css';

type TitleCardProps = {
  title: Title;
};

export default function TitleCard({ title }: TitleCardProps) {
  return (
    <>
      <div className="image-container">
        <img src={title.images.jpg.image_url} />
      </div>
      <div>{title.title_english}</div>
    </>
  );
}
