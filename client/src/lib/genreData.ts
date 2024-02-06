import { GenreType } from './dataTypes';

// GenreData handwritten from the Jikan API to avoid extra request
export const genreData: GenreType[] = [
  { mal_id: 1, name: 'Action' },
  { mal_id: 2, name: 'Adventure' },
  { mal_id: 46, name: 'Award Winning' },
  { mal_id: 4, name: 'Comedy' },
  { mal_id: 8, name: 'Drama' },
  { mal_id: 10, name: 'Fantasy' },
  { mal_id: 14, name: 'Horror' },
  { mal_id: 7, name: 'Mystery' },
  { mal_id: 22, name: 'Romance' },
  { mal_id: 24, name: 'Sci-Fi' },
  { mal_id: 36, name: 'Slice of Life' },
  { mal_id: 37, name: 'Supernatural' },
  { mal_id: 41, name: 'Suspense' },
];

export const genresToLoad = [
  'Action',
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
