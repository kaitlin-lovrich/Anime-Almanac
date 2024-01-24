type GenreProps = {
  genre: string;
};

export default function Genre({ genre }: GenreProps) {
  return <h2 className="text-5xl font-heading underline">{genre}</h2>;
}
