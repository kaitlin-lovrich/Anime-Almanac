import { FaHeart, FaRegHeart } from "react-icons/fa";
import { TitleData } from "../lib/dataTypes";
import { useState } from "react";
import { useLocation } from "react-router-dom";

export default function TitlePage() {
    const [isSaved, setisSaved] = useState(false);
    const location = useLocation();
    const title: TitleData = location.state?.title; // Access the passed state

    if (!title) {
        return <p>No title data available.</p>; // Render a fallback if no title data is passed
    }

    return (
        // Change width
        <div className="flex justify-center flex-col mx-auto md:mt-8 lg:mt-28 w-[90%] lg:w-[85%] lg:max-w-[1380px] text-custom-white gap-8">
            <div className="flex gap-8 text-lg">
                <section className="w-80">
                    <img
                        src={title.images.jpg.image_url}
                        alt={`${title.title_english} image`}
                        className="w-full rounded"
                    />
                </section>
                <div className="flex flex-col justify-between">
                    <aside className="flex flex-col *:py-1.5 pt-24">
                        <h1 className="text-5xl font-bold">
                            {title.title_english} Attack on Titan
                        </h1>
                        <p>
                            {title.genres
                                .map((genre, index) => genre[index])
                                .join(" ")}
                        </p>
                        <p>
                            {title.year}{" "}
                            <span className="font-light px-2 font-base">
                                {title.rating}
                            </span>{" "}
                            {title.type === "TV"
                                ? `${title.type} Series`
                                : title.type}
                        </p>
                        <p>
                            {title.episodes} episodes {title.duration}isode
                        </p>
                    </aside>
                    <span className="*:size-10 *:cursor-pointer hover:*:scale-110 active:*:scale-110 *:duration-300">
                        {isSaved ? (
                            <FaHeart onClick={() => setisSaved(!isSaved)} />
                        ) : (
                            <FaRegHeart onClick={() => setisSaved(!isSaved)} />
                        )}
                    </span>
                </div>
            </div>
            <p className="text-2xl text-justify multiline-truncate-6 sm:text-red-200 md:text-green-200 lg:text-red-800 xl:text-yellow-600">
                {title.synopsis}
            </p>
        </div>
    );
}
