type GenreProps = {
  genre: string;
};

export default function Genre({ genre }: GenreProps) {
  return (
    <h3 className="text-2xl md:text-3xl font-heading pl-5 md:pl-7 py-2 text-custom-gray">{genre}</h3>
  );
}
