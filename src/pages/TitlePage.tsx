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
        return <p className="text-custom-white">No title data available.</p>;
    }

    return (
        <>
            <div className="flex justify-center flex-col mx-auto mt-8 lg:mt-28 mb-24 w-[90%] lg:w-[85%] lg:max-w-[1380px] text-custom-white gap-5 md:gap-8">
                <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-lg ">
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
                                {title.genres
                                    .map((genre) => genre.name)
                                    .join("   ")}
                            </p>
                            <p className="whitespace-break-spaces">
                                {title.episodes} episodes {"   "}
                                {title.duration}isode
                            </p>
                        </aside>
                        <span className="*:size-10 *:cursor-pointer hover:*:scale-110 active:*:scale-110 *:duration-300">
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
                <p className="text-xl lg:text-2xl sm:text-justify lg:leading-[2.8rem] multiline-truncate-2">
                    {title.synopsis}
                </p>
            </div>
            <Footer />
        </>
    );
}
