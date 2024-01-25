type GenreProps = {
  genre: string;
};

export default function Genre({ genre }: GenreProps) {
  return (
    <h2 className="text-3xl font-heading px-14 py-2 text-[#B0B0B0] drop-shadow-xl">
      {genre}
    </h2>
  );
}
