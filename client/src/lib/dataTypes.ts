export type GenreType = {
  name: string;
  mal_id: number;
};

type Image = {
  image_url: string;
};

type Trailer = {
  embed_url: string;
};

export type TitleData = {
  title_english: string;
  images: {
    jpg: Image;
  };
  genres: string[];
  type: string;
  year: number;
  rating: string;
  episodes: string;
  duration: string;
  trailer: Trailer;
  mal_id: number;
};

export type Title = {
  data: TitleData[];
};

// type ImageFormat = {
//   image_url: string;
// };

// type Images = {
//   jpg: ImageFormat;
// };

// export type Title = {
//   title_english: string;
//   images: Images;
//   genres: Array<string>;
//   type: string;
//   year: number;
//   rating: string;
//   episodes: string;
//   duration: string;
//   trailer: object;
//   mal_id: number;
// };

// titlesArray: {
//   data: [
//     {
//       title_english: 'title',
//       images: { jpg: { image_url: 'string' } },
//       genres: ['string', 'string'],
//       type: 'string',
//       year: 0,
//       rating: 'string',
//       episodes: 'string',
//       duration: 'string',
//       trailer: { embed_url: 'string' },
//       mal_id: 0,
//     },
//   ];
// }
