import { useState } from 'react';
import { TitleData } from '../lib/dataTypes';
import TitleCard from './TitleCard';
import { FaChevronRight } from 'react-icons/fa6';

type TitleListProps = {
  titles: TitleData[];
};

export default function TitleList({ titles }: TitleListProps) {
  const [current, setCurrent] = useState(0);
  const itemsToShow = 7; // Number of items to show at once

  // Function to show next items
  const showNextItems = () => {
    setCurrent((prevCurrent) => {
      let nextIndex = prevCurrent + itemsToShow;
      if (nextIndex >= titles.length) {
        nextIndex = 0; // Reset to beginning if we've reached the end
      }
      return nextIndex;
    });
  };

  // Slice the array of titles to only show a subset
  const visibleTitles = titles.slice(current, current + itemsToShow);

  return (
    <div className="flex font-heading mx-8">
      {visibleTitles.map((title) => (
        <div key={title.mal_id}>
          <TitleCard title={title} />
        </div>
      ))}
      <div
        onClick={showNextItems}
        className="flex text-[rgb(176,176,176)] text-5xl cursor-pointer items-center">
        <FaChevronRight />
      </div>
    </div>
  );
}
