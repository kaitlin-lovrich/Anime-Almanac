import { useEffect, useState } from 'react';
import { type GenreType } from '../lib/dataTypes';
import GenreTitlesRow from '../componenets/GenreTitlesRow';
import { genreData } from '../lib/genreData';

export default function HomePage() {
  const [genres, setGenres] = useState<GenreType[]>([]);

  useEffect(() => {
    async function loadHomePage() {
      try {
        const removeGenres = [
          // 'Action',
          'Award Winning',
          'Adventure',
          'Comedy',
          'Drama',
          'Fantasy',
          'Horror',
          'Mystery',
          'Romance',
          'Sci-Fi',
          'Slice of Life',
          'Supernatural',
          'Suspense',
        ];
        // Filter out genres that are in the removeGenres array to reduce number of api calls
        const filteredGenres = genreData.filter(
          (genre: GenreType) => !removeGenres.includes(genre.name)
        );
        setGenres(filteredGenres);
      } catch (err) {
        console.error(`Error loading home page: ${err}`);
      }
    }
    loadHomePage();
  }, []);

  return (
    <div className="content-container">
      {genres.map((genre) => (
        <GenreTitlesRow key={genre.mal_id} genre={genre} />
      ))}
    </div>
  );
}
