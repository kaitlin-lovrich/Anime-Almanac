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
            <Link to={`../title-page/${title.mal_id}`} state={{ title }}>
                <div className="w-[200px] max-w-[350px] md:w-1/2 md:max-w-[380px] lg:w-2/5 lg:max-w-[400px] xl:max-w-[430px] h-[280px] max-h-[430px] md:h-full self-center md:self-start">
                    <img
                        src={title.images.jpg.image_url}
                        alt={`${title.title_english} image`}
                        className="w-full h-full rounded"
                        onClick={() => setFilter(null)}
                    />
                </div>
            </Link>
            <div className="flex flex-col justify-between md:w-1/2 gap-5">
                <aside className="flex flex-col *:py-1.5">
                    <h1 className="text-xl md:text-3xl lg:text-4xl font-bold">
                        {title.title_english}
                    </h1>
                    <p>
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
                    <p className="whitespace-break-spaces">
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
