type GenreProps = {
  genre: string;
};

export default function Genre({ genre }: GenreProps) {
  return <h2 className="genre-heading">{genre}</h2>;
}
