import { useEffect, useState } from 'react';
import { type GenreType } from '../lib/dataTypes';
import React from 'react';
import GenreTitlesRow from '../componenets/GenreTitlesRow';

export default function HomePage() {
  const [genres, setGenres] = useState<GenreType[]>([]);

  useEffect(() => {
    async function loadHomePage() {
      try {
        const genreResponse = await fetch(
          'https://api.jikan.moe/v4/genres/anime?filter=genres'
        );
        const genreData = await genreResponse.json();

        const removeGenres = [
          'Avant Garde',
          'Boys Love',
          'Drama',
          'Girls Love',
          'Gourmet',
          'Sports',
          'Drama',
          'Action',
          'Award Winning',
          'Adventure',
          'Mystery',
          'Suspense',
          'Romance',
          'Horror',
          'Slice of Life',
          'Sci-Fi',
          'Fantasy',
          'Comedy',
        ];
        // Filter out genres that are in the removeGenres array to reduce number of api calls
        const filteredGenres = genreData.data.filter(
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
    <React.Fragment>
      <div>
        {genres.map((genre) => (
          <GenreTitlesRow key={genre.mal_id} genre={genre} />
        ))}
      </div>
    </React.Fragment>
  );
}
