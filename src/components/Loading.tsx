import { useEffect, useState } from 'react';
import '../index.css';

export default function Loading() {
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
  // Create an array with length equal to itemsToShow
  const loadingItems = Array.from({ length: itemsToShow }, (_, index) => index);

  return (
    <div className="flex justify-evenly flex-wrap">
      <div className="flex">
        {loadingItems.map((item) => (
          <div key={item} className="flex">
            <div className="loading-item mx-2 mt-20 lg:mt-24 h-64 md:h-72 lg:h-80 w-36 md:w-40 lg:w-44 shadow-custom-inset rounded-md"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
