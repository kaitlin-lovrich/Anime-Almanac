import { TitleData } from "../lib/dataTypes";
import "../index.css";
import { Link } from "react-router-dom";
import { AppContext } from "./index";
import { useContext } from "react";

type TitleCardProps = {
    title: TitleData;
};

export function TitleCard({ title }: TitleCardProps) {
    const { setFilter } = useContext(AppContext);
    return (
        <>
            <div className="w-36 md:w-40 lg:w-44 mx-2">
                <img
                    src={title.images.jpg.image_url}
                    alt={`${title.title_english} image`}
                    className="w-full h-48 md:h-52 lg:h-56 rounded-t-md"
                />
            </div>
            <div className="bg-[rgba(78,54,54,0.85)] mx-2 w-36 md:w-40 lg:w-44 h-20 md:h-24 shadow-custom-inset rounded-b-md">
                <Link to={`title-page/${title.mal_id}`} state={{ title }}>
                    <p
                        className="px-3 py-1 md:py-2 mx-auto cursor-pointer text-sm md:text-base text-custom-gray tracking-wider multiline-truncate-1 h-full hover:text-custom-white active:text-custom-white"
                        onClick={() => setFilter(null)}
                    >
                        {title.title_english}
                    </p>
                </Link>
            </div>
        </>
    );
}
