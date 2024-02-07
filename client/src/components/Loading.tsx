import { useEffect, useState } from 'react';

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
  console.log('loadingItems array:', loadingItems);
  console.log('itemsToShow in Loading component:', itemsToShow);

  return (
    <div className="flex justify-evenly flex-wrap">
      <div className="flex">
        {/* Render the inner-most div for each item in loadingItems */}
        {loadingItems.map((item) => (
          <div key={item} className="flex">
            <div className="bg-[rgba(78,54,54,0.85)] mx-2 mt-24 h-72 w-44 shadow-custom-inset rounded-md"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

// <div className="bg-custom-gradient-3 rounded-md shadow-custom-inset p-20 my-16">
//   <p className="font-heading text-4xl text-stroke p-8">Loading...</p>
// </div>

// <div className="bg-[rgba(78,54,54,0.85)] mx-2 my-24 h-72 w-44 shadow-custom-inset rounded-md"></div>
// <div className="bg-[rgba(78,54,54,0.85)] mx-2 my-24 h-72 w-44 shadow-custom-inset rounded-md"></div>
