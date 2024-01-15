import React, { useEffect, useState } from 'react';
import { GenreType, Title } from '../lib/dataTypes';
import Genre from './Genre';
import TitleList from './TitleList';

type GenreTitleRowProps = {
  genre: GenreType;
};

export default function GenreTitlesRow({ genre }: GenreTitleRowProps) {
  const [genreTitles, setGenreTitles] = useState<Title[]>([]);

  useEffect(() => {
    async function loadTitles() {
      try {
        const response = await fetch(
          `https://api.jikan.moe/v4/anime?order_by=popularity&genres=${genre.mal_id}`
        );
        const titlesArray = await response.json();
        console.log('titlesArray.data', titlesArray.data);
        setGenreTitles(titlesArray.data);
      } catch (err) {
        console.error(`Error fetching titles for ${genre.name}. Error: ${err}`);
      }
    }
    loadTitles();
  }, [genre.mal_id, genre.name]);

  return (
    <React.Fragment>
      <Genre key={genre.mal_id} genre={genre.name} />
      <TitleList titles={genreTitles} />
    </React.Fragment>
  );
}
