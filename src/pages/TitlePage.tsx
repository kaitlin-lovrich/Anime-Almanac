import { FaHeart, FaRegHeart } from "react-icons/fa";
import { TitleData } from "../lib/dataTypes";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";

export default function TitlePage() {
    const [isSaved, setisSaved] = useState(false);
    const location = useLocation();
    const title: TitleData = location.state?.title; // Access the passed state

    if (!title) {
        return <p>No title data available.</p>; // Render a fallback if no title data is passed
    }

    return (
        <>
            <div className="flex justify-center flex-col mx-auto md:mt-8 lg:mt-28 w-[90%] lg:w-[85%] lg:max-w-[1380px] text-custom-white gap-8">
                <div className="flex flex-col md:flex-row gap-8 text-lg">
                    <section className="w-full max-w-[350px] md:w-80 self-center md:self-start">
                        <img
                            src={title.images.jpg.image_url}
                            alt={`${title.title_english} image`}
                            className="w-full rounded"
                        />
                    </section>
                    <div className="flex flex-col justify-between gap-4">
                        <aside className="flex flex-col *:py-1.5 md:pt-24">
                            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
                                {title.title_english}
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
                        <span className="*:size-7 md:*:size-8 lg:*:size-9 xl:*:size-10 *:cursor-pointer hover:*:scale-110 active:*:scale-110 *:duration-300">
                            {isSaved ? (
                                <FaHeart onClick={() => setisSaved(!isSaved)} />
                            ) : (
                                <FaRegHeart
                                    onClick={() => setisSaved(!isSaved)}
                                />
                            )}
                        </span>
                    </div>
                </div>
                <p className="text-xl lg:text-2xl text-justify multiline-truncate-6">
                    {title.synopsis}
                </p>
            </div>
            <Footer />
        </>
    );
}
