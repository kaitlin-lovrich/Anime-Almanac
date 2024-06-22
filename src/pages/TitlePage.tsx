import { FaHeart, FaRegHeart } from "react-icons/fa";
import { TitleData } from "../lib/dataTypes";
import { useState } from "react";
import { useLocation } from "react-router-dom";

// type TitlePageProps = {
//   title: TitleData
// }

export default function TitlePage() {
    const [isSaved, setisSaved] = useState(false);
    const location = useLocation();
    const title: TitleData = location.state?.title; // Access the passed state

    if (!title) {
        return <p>No title data available.</p>; // Render a fallback if no title data is passed
    }

    return (
        // Change width
        <div className="flex justify-center flex-col w-3/4">
            <section className="w-80">
                <img
                    src={title.images.jpg.image_url}
                    alt={`${title.title_english} image`}
                    className="w-full rounded"
                />
            </section>
            <aside>
                <h1>{title.title_english}</h1>
                <p>{title.genres.map((genre) => genre).join(" ")}</p>
                <p>
                    {title.year} {title.rating} {title.type}
                </p>
                <p>
                    {title.episodes} {title.duration}
                </p>
            </aside>

            {isSaved ? (
                <FaRegHeart onClick={() => setisSaved(!isSaved)} />
            ) : (
                <FaHeart onClick={() => setisSaved(!isSaved)} />
            )}

            <p>{title.synopsis}</p>
        </div>
    );
}
