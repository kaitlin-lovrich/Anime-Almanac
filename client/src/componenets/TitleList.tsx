import { Title } from '../lib/dataTypes';
import TitleCard from './TitleCard';

type TitleListProps = {
  titles: Title[];
};

export default function TitleList({ titles }: TitleListProps) {
  return (
    <>
      <div>
        {titles.map((title) => {
          return (
            <div key={title.mal_id}>
              <TitleCard title={title} />
            </div>
          );
        })}
      </div>
    </>
  );
}
