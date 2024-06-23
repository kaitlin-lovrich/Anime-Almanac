import { FaHeart, FaRegHeart } from "react-icons/fa";
import { TitleData } from "../lib/dataTypes";
import { useState } from "react";

type FavoritetitleCardProps = {
    title: TitleData;
};

export default function FavoriteTitleCard({ title }: FavoritetitleCardProps) {
    const [isSaved, setisSaved] = useState(false);

    return (
        <>
            <section className="w-[75%] max-w-[350px] md:w-1/2 md:max-w-[380px] lg:w-2/5 lg:max-w-[400px] xl:max-w-[430px] self-center md:self-start">
                <img
                    src={title.images.jpg.image_url}
                    alt={`${title.title_english} image`}
                    className="w-full rounded"
                />
            </section>
            <div className="flex flex-col justify-between md:w-1/2 gap-5">
                <aside className="flex flex-col *:py-1.5 md:pt-24">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
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
                <span className="*:size-10 *:cursor-pointer hover:*:text-white hover:*:scale-110 active:*:scale-110 *:duration-300">
                    {isSaved ? (
                        <FaHeart onClick={() => setisSaved(!isSaved)} />
                    ) : (
                        <FaRegHeart onClick={() => setisSaved(!isSaved)} />
                    )}
                </span>
            </div>
        </>
    );
}
