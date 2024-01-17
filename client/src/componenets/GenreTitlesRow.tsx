import React, { useEffect, useState } from 'react';
import { GenreType, Title, TitleData } from '../lib/dataTypes';
import Genre from './Genre';
import TitleList from './TitleList';

type GenreTitleRowProps = {
  genre: GenreType;
};

export default function GenreTitlesRow({ genre }: GenreTitleRowProps) {
  const [genreTitles, setGenreTitles] = useState<TitleData[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true; // tracks mounted state
    async function loadTitles() {
      try {
        const response = await fetch(
          `https://api.jikan.moe/v4/anime?order_by=popularity&genres=${genre.mal_id}`
        );
        // Check for response.ok to handle HTTP errors
        if (!response.ok)
          throw new Error(`HTTP error! Status: ${response.status}`);

        let titlesArray: Title;
        try {
          // Try parsing the JSON response
          titlesArray = await response.json();
          console.log('titlesArray', titlesArray);
          console.log('titlesArray.data', titlesArray.data);
        } catch (jsonError) {
          // Catch JSON parsing errors
          throw new Error('Error parsing JSON response');
        }

        if (isMounted) setGenreTitles(titlesArray.data);
      } catch (err) {
        // Type checking
        if (err instanceof Error) {
          // Handle both fetch and JSON parsing errors
          console.error(
            `Error fetching titles for ${genre.name}. Error: ${err}`
          );
          if (isMounted) {
            setError(err.message);
          }
        }
      }
    }
    loadTitles();

    // Cleanup function to set isMounted to false when the component unmounts
    return () => {
      isMounted = false;
    };
  }, [genre.mal_id, genre.name]);

  // Render error message if it exists
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <React.Fragment>
      <Genre key={genre.mal_id} genre={genre.name} />
      <TitleList titles={genreTitles} />
    </React.Fragment>
  );
}
