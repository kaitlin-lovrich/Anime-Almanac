import { useEffect, useState } from 'react';
import { TitleData } from '../lib/dataTypes';
import TitleCard from './TitleCard';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';

type TitleListProps = {
  titles: TitleData[];
};

export default function TitleList({ titles }: TitleListProps) {
  const [current, setCurrent] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(6);

  function updateItemsToShow() {
    const width = window.innerWidth;
    if (width <= 640) {
      setItemsToShow(2);
    } else if (width <= 768) {
      setItemsToShow(3);
    } else if (width <= 1024) {
      setItemsToShow(4);
    } else if (width <= 1280) {
      setItemsToShow(5);
    } else {
      setItemsToShow(6);
    }
  }

  useEffect(() => {
    window.addEventListener('resize', updateItemsToShow);
    updateItemsToShow();
    return () => {
      window.removeEventListener('resize', updateItemsToShow);
    };
  }, []);

  function showNextItems() {
    setCurrent((prevCurrent) => {
      // Calculate next index, wrapping around to the beginning if needed
      return (prevCurrent + itemsToShow) % filteredTitles.length;
    });
  }

  function showPrevItems() {
    setCurrent((prevCurrent) => {
      // If the current index is 0, do not change it
      if (prevCurrent === 0) {
        return prevCurrent;
      }
      // Calculate the new index for showing previous items
      let newIndex = prevCurrent - itemsToShow;
      // Check if the new index is negative
      if (newIndex < 0) {
        // If negative, wrap around to the end of the list
        newIndex =
          filteredTitles.length - Math.abs(newIndex % filteredTitles.length);
        // Handle the case when the absolute value of newIndex is a multiple of filteredTitles.length
        if (newIndex === filteredTitles.length) {
          newIndex = 0;
        }
      }
      return newIndex;
    });
  }

  const filteredTitles = titles.filter((title) => title.title_english !== null);

  function getVisibleTitles() {
    // Get a slice of titles starting from 'current'
    let items = filteredTitles.slice(current, current + itemsToShow);
    // If the slice is too short (we're at the end of the array), append items from the beginning
    if (items.length < itemsToShow) {
      items = items.concat(filteredTitles.slice(0, itemsToShow - items.length));
    }
    return items;
  }

  const visibleTitles = getVisibleTitles();

  return (
    <div>
      <div className="flex font-heading">
        {current > 0 && (
          <div className="relative">
            <div
              onClick={showPrevItems}
              className="flex absolute left-[-15px] top-[110px] md:top-[125px] text-[rgb(176,176,176)] text-6xl cursor-pointer items-center">
              <FaChevronLeft />
            </div>
          </div>
        )}
        {visibleTitles.map((title) => (
          <div key={title.mal_id}>
            <TitleCard title={title} />
          </div>
        ))}
        <div className="relative">
          <div
            onClick={showNextItems}
            className="flex absolute right-[-15px] top-[110px] md:top-[125px] text-[rgb(176,176,176)] text-5xl md:text-6xl cursor-pointer items-center">
            <FaChevronRight />
          </div>
        </div>
      </div>
    </div>
  );
}
