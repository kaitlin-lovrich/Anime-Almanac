export type GenreType = {
  name: string;
  mal_id: number;
};

export type Title = {
  title_english: string;
  images: Images;
  genres: Array<string>;
  type: string;
  year: number;
  rating: string;
  episodes: string;
  duration: string;
  trailer: object;
  mal_id: number;
};

type ImageFormat = {
  image_url: string;
};

type Images = {
  jpg: ImageFormat;
};
