import { useEffect, useState } from 'react';
import { type GenreType } from '../lib/dataTypes';
import GenreTitlesRow from '../components/GenreTitlesRow';
import { genreData } from '../lib/genreData';

export default function HomePage() {
  const [genres, setGenres] = useState<GenreType[]>([]);

  useEffect(() => {
    // Array to hold all timeout IDs
    const timerIds: (number | NodeJS.Timeout)[] = [];

    async function loadHomePage() {
      try {
        const initialGenres = [
          'Action',
          'Award Winning',
          'Adventure',
          // 'Comedy',
          // 'Drama',
          // 'Fantasy',
          // 'Horror',
          // 'Mystery',
          // 'Romance',
          // 'Sci-Fi',
          // 'Slice of Life',
          // 'Supernatural',
          // 'Suspense',
        ];
        // Immediately set the first genre to avoid rate limit.
        const firstGenre = genreData.find(
          (genre) => genre.name === initialGenres[0]
        );
        if (firstGenre) setGenres([firstGenre]); // If firstGenre found, set it

        // Set second genre after a delay
        const timerId1 = setTimeout(() => {
          const secondGenre = genreData.find(
            (genre) => genre.name === initialGenres[1]
          );
          if (secondGenre) {
            setGenres((prevGenres) => [...prevGenres, secondGenre]);
          }
        }, 1000); // Delay of 1 second for the second genre
        timerIds.push(timerId1);
      } catch (err) {
        console.error(`Error loading home page: ${err}`);
      }
    }
    loadHomePage();
    // Cleanup function to clear all timeouts
    return () => {
      timerIds.forEach((timerId) => clearTimeout(timerId as number));
    };
  }, []);

  return (
    <div className="flex flex-wrap justify-center mt-28">
      {genres.map((genre) => (
        <GenreTitlesRow key={genre.mal_id} genre={genre} />
      ))}
    </div>
  );
}
