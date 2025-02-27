type GenreProps = {
    genre: string;
};

export function Genre({ genre }: GenreProps) {
    return (
        <h3 className="text-2xl xl:text-3xl font-heading pl-5 md:pl-7 py-2 text-custom-gray">
            {genre}
        </h3>
    );
}
