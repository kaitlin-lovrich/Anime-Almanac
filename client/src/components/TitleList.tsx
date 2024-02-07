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
      <div className="flex font-heading mx-8">
        {current > 0 && (
          <div className="relative">
            <div
              onClick={showPrevItems}
              className="flex absolute left-[-15px] top-[125px] text-[rgb(176,176,176)] text-6xl cursor-pointer items-center">
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
            className="flex absolute right-[-15px] top-[125px] text-[rgb(176,176,176)] text-6xl cursor-pointer items-center">
            <FaChevronRight />
          </div>
        </div>
      </div>
    </div>
  );
}

// transform effect attempt (and fail)
// export default function TitleList({ titles }: TitleListProps) {
//   const [current, setCurrent] = useState(0);
//   const [itemsToShow, setItemsToShow] = useState(7); // default number of items
//   const carouselRef = useRef<HTMLDivElement>(null);

//   const titleCardWidth = 176; // width of each TitleCard
//   const margin = 8; // margin on each side of a TitleCard

//   const updateItemsToShow = () => {
//     const width = window.innerWidth;
//     if (width <= 640) {
//       setItemsToShow(2);
//     } else if (width <= 768) {
//       setItemsToShow(3);
//     } else if (width <= 1024) {
//       setItemsToShow(4);
//     } else if (width <= 1280) {
//       setItemsToShow(5);
//     } else {
//       setItemsToShow(6);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('resize', updateItemsToShow);
//     updateItemsToShow();
//     return () => {
//       window.removeEventListener('resize', updateItemsToShow);
//     };
//   }, []);

//   const showNextItems = () => {
//     setCurrent((prevCurrent) => {
//       let nextIndex = prevCurrent + itemsToShow;
//       if (nextIndex >= titles.length) {
//         nextIndex = 0; // Reset to start if we've reached the end
//       }
//       return nextIndex;
//     });
//   };

//   useEffect(() => {
//     const totalWidth = titleCardWidth + 2 * margin; // Total width including margins
//     const translateX = -current * itemsToShow * totalWidth; // Adjusted calculation for translateX
//     if (carouselRef.current) {
//       carouselRef.current.style.transform = `translateX(${translateX}px)`;
//     }
//   }, [current, itemsToShow]);

//   // Adjust the carouselWidth calculation if necessary
//   const carouselWidth = itemsToShow * (titleCardWidth + 2 * margin);

//   const visibleTitles = titles.slice(current, current + itemsToShow);

//   return (
//     <div className="flex items-center mx-8">
//       <div
//         ref={carouselRef}
//         style={{ width: `${carouselWidth}px` }}
//         className="flex font-heading transition-transform duration-300 overflow-hidden">
//         {visibleTitles.map((title) => (
//           <div key={title.mal_id} className="mx-2">
//             <TitleCard title={title} />
//           </div>
//         ))}
//       </div>
//       <div
//         onClick={showNextItems}
//         className="flex text-[rgb(176,176,176)] text-5xl cursor-pointer items-center ml-2">
//         <FaChevronRight />
//       </div>
//     </div>
//   );
// }

// Scrollable attempt:
// export default function TitleList({ titles }: TitleListProps) {
//   const [current, setCurrent] = useState(0);
//   const [itemsToShow, setItemsToShow] = useState(6); // default number of items
//   const [touchStart, setTouchStart] = useState(null);
//   const [touchEnd, setTouchEnd] = useState(null);

//   const updateItemsToShow = () => {
//     const width = window.innerWidth;
//     if (width <= 640) {
//       setItemsToShow(2);
//     } else if (width <= 768) {
//       setItemsToShow(3);
//     } else if (width <= 1024) {
//       setItemsToShow(4);
//     } else if (width <= 1280) {
//       setItemsToShow(5);
//     } else {
//       setItemsToShow(6);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('resize', updateItemsToShow);
//     updateItemsToShow();
//     return () => {
//       window.removeEventListener('resize', updateItemsToShow);
//     };
//   }, []);

//   const showNextItems = () => {
//     setCurrent((prevCurrent) => {
//       // Calculate next index, wrapping around to the beginning if needed
//       return (prevCurrent + itemsToShow) % filteredTitles.length;
//     });
//   };

//   const showPrevItems = () => {
//     setCurrent((prevCurrent) => {
//       // If the current index is 0, do not change it
//       if (prevCurrent === 0) {
//         return prevCurrent;
//       }

//       // Calculate the new index for showing previous items
//       let newIndex = prevCurrent - itemsToShow;

//       // Check if the new index is negative
//       if (newIndex < 0) {
//         // If negative, wrap around to the end of the list
//         newIndex =
//           filteredTitles.length - Math.abs(newIndex % filteredTitles.length);

//         // Handle the case when the absolute value of newIndex is a multiple of filteredTitles.length
//         if (newIndex === filteredTitles.length) {
//           newIndex = 0;
//         }
//       }

//       return newIndex;
//     });
//   };

//   const filteredTitles = titles.filter((title) => title.title_english != null);

//   const visibleTitles = (() => {
//     // Get a slice of titles starting from 'current'
//     let items = filteredTitles.slice(current, current + itemsToShow);

//     // If the slice is too short (we're at the end of the array), append items from the beginning
//     if (items.length < itemsToShow) {
//       items = items.concat(filteredTitles.slice(0, itemsToShow - items.length));
//     }

//     return items;
//   })();

//   const handleTouchStart = (e) => {
//     setTouchStart(e.targetTouches[0].clientX);
//   };

//   const handleTouchMove = (e) => {
//     setTouchEnd(e.targetTouches[0].clientX);
//   };

//   const handleTouchEnd = () => {
//     if (!touchStart || !touchEnd) return;
//     const threshold = 50; // minimum distance to trigger swipe
//     const swipeDistance = touchStart - touchEnd;

//     if (swipeDistance > threshold) {
//       // Swiped left
//       showNextItems();
//     } else if (swipeDistance < -threshold) {
//       // Swiped right
//       showPrevItems(); // You need to implement this function similar to showNextItems
//     }

//     // Reset
//     setTouchStart(null);
//     setTouchEnd(null);
//   };

//   return (
//     <div
//       className="flex font-heading mx-8"
//       onTouchStart={handleTouchStart}
//       onTouchMove={handleTouchMove}
//       onTouchEnd={handleTouchEnd}>
//       {current > 0 && (
//         <div
//           onClick={showPrevItems}
//           className="flex text-[rgb(176,176,176)] text-5xl cursor-pointer items-center">
//           <FaChevronLeft />
//         </div>
//       )}
//       {visibleTitles.map((title) => (
//         <div key={title.mal_id}>
//           <TitleCard title={title} />
//         </div>
//       ))}
//       <div
//         onClick={showNextItems}
//         className="flex text-[rgb(176,176,176)] text-5xl cursor-pointer items-center">
//         <FaChevronRight />
//       </div>
//     </div>
//   );
// }
