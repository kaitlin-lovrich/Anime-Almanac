import { useEffect, useState } from 'react';
import { GenreType, Title, TitleData } from '../lib/dataTypes';
import Genre from './Genre';
import TitleList from './TitleList';
import Loading from './Loading';
import ErrorMessage from './ErrorMessage';

type GenreTitleRowProps = {
  genre: GenreType | undefined;
};

export default function GenreTitlesRow({ genre }: GenreTitleRowProps) {
  const [genreTitles, setGenreTitles] = useState<TitleData[]>([]);
  const [itemsToShow, setItemsToShow] = useState(6); // default number of items
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true; // tracks mounted state
    setIsLoading(true);
    async function loadTitles() {
      try {
        const response = await fetch(
          `https://api.jikan.moe/v4/anime?order_by=popularity&genres=${
            genre!.mal_id
          }`
        );
        if (!response.ok)
          throw new Error(`HTTP error! Status: ${response.status}`);

        let titlesArray: Title;
        try {
          titlesArray = await response.json();
          // console.log('titlesArray.data', titlesArray.data);
        } catch (jsonError) {
          throw new Error('Error parsing JSON response');
        }

        if (isMounted) setGenreTitles(titlesArray.data);
      } catch (err) {
        // Type checking
        if (err instanceof Error) {
          // Handle both fetch and JSON parsing errors
          console.error(
            `Error fetching titles for ${genre!.name}. Error: ${err}`
          );
          if (isMounted) {
            setError(err.message);
          }
        }
      } finally {
        setIsLoading(false);
      }
    }
    loadTitles();

    // Cleanup function to set isMounted to false when the component unmounts
    return () => {
      isMounted = false;
    };
  }, [genre!, genre!.mal_id, genre!.name]);

  // Render error message if it exists
  if (error) {
    return <ErrorMessage error={error} />;
  }

  if (isLoading || genreTitles.length === 0) {
    return (
      <Loading itemsToShow={itemsToShow} setItemsToShow={setItemsToShow} />
    );
  }

  return (
    <div className="genre-title-row mt-8">
      <Genre key={genre!.mal_id} genre={genre!.name} />
      <TitleList
        titles={genreTitles}
        itemsToShow={itemsToShow}
        setItemsToShow={setItemsToShow}
      />
    </div>
  );
}
