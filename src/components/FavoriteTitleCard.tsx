import { TitleData } from "../lib/dataTypes";
import { useContext } from "react";
import { AppContext } from "./AppContext";
import { FaHeartCircleXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";

type FavoritetitleCardProps = {
    title: TitleData;
};

export default function FavoriteTitleCard({ title }: FavoritetitleCardProps) {
    const { handleHeartClick, setFilter } = useContext(AppContext);

    return (
        <>
            <Link
                to={`../title-page/${title.mal_id}`}
                state={{ title }}
                className="w-1/2 max-w-[215px] sm:w-2/5 sm:max-w-[250px] md:max-w-[300px] lg:max-w-[350px] h-full min-h-[280px] self-center md:self-start"
            >
                <img
                    src={title.images.jpg.image_url}
                    alt={`${title.title_english} image`}
                    className="w-full h-full min-h-[280px] rounded"
                    onClick={() => setFilter(null)}
                />
            </Link>
            <div className="flex flex-col justify-between w-1/2 sm:w-3/5 gap-5">
                <aside className="flex flex-col *:py-1.5">
                    <h1 className="text-xl md:text-3xl lg:text-4xl font-bold">
                        {title.title_english}
                    </h1>
                    <p className="hidden sm:block">
                        {title.year}{" "}
                        <span className="font-light px-2 font-base">
                            {title.rating}
                        </span>{" "}
                        {title.type === "TV"
                            ? `${title.type} Series`
                            : title.type}
                    </p>
                    <p className="whitespace-break-spaces">
                        {title.genres.map((genre) => genre.name).join("   ")}
                    </p>
                    <p className="whitespace-break-spaces hidden sm:block">
                        {title.episodes} episodes {"   "}
                        {title.duration}isode
                    </p>
                </aside>

                <span className="*:size-10 self-end *:cursor-pointer hover:*:text-white hover:*:scale-110 active:*:scale-110 *:duration-300">
                    <FaHeartCircleXmark
                        onClick={() => handleHeartClick(title)}
                    />
                </span>
            </div>
        </>
    );
}
