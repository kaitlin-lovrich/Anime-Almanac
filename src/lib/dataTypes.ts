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
    genres: GenreType[];
    type: string;
    year: number;
    rating: string;
    episodes: string;
    duration: string;
    synopsis: string;
    trailer: Trailer;
    mal_id: number;
};

export type Title = {
    data: TitleData[];
};
