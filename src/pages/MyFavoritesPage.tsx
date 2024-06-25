import { useContext, useEffect } from "react";
import Footer from "../components/Footer";
import { AppContext } from "../components/AppContext";
import FavoriteTitleCard from "../components/FavoriteTitleCard";

export default function MyFavoritesPage() {
    const { setFilter, favoritedTitles } = useContext(AppContext);

    useEffect(() => {
        setFilter("My Favorites");
    }, [setFilter]);

    return (
        <>
            <div className="flex justify-center flex-col mx-auto mt-8 lg:mt-28 mb-24 w-[90%] lg:w-[85%] lg:max-w-[1380px] text-custom-white gap-5 md:gap-8">
                <h2 className="text-3xl md:text-5xl text-custom-white font-bold">
                    My Favorites
                </h2>
                <div className="flex flex-col gap-4 md:gap-8 text-lg ">
                    {favoritedTitles.length > 0 ? (
                        favoritedTitles.map((title) => (
                            <div key={title.mal_id} className="flex">
                                <FavoriteTitleCard title={title} />
                            </div>
                        ))
                    ) : (
                        <p>No saved titles</p>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
}
