import React from 'react';
import { TitleData } from '../lib/dataTypes';
import TitleCard from './TitleCard';

type TitleListProps = {
  titles: TitleData[];
};

export default function TitleList({ titles }: TitleListProps) {
  return (
    <div className="flex font-heading mx-8">
      {titles.map((title) => {
        return (
          <React.Fragment key={title.mal_id}>
            <TitleCard title={title} />
          </React.Fragment>
        );
      })}
    </div>
  );
}
