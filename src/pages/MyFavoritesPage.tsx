import { useContext } from "react";
import Footer from "../components/Footer";
import { AppContext } from "../components/AppContext";
import FavoriteTitleCard from "../components/FavoriteTitleCard";

export default function MyFavoritesPage() {
    const { setFilter, favoritedTitles } = useContext(AppContext);

    setFilter("My Favorites");

    return (
        <>
            <h2 className="text-2xl md:text-3xl text-custom-white font-bold">
                My Favorites
            </h2>
            <div className="flex justify-center flex-col mx-auto mt-8 lg:mt-28 mb-24 w-[90%] lg:w-[85%] lg:max-w-[1380px] text-custom-white gap-5 md:gap-8">
                <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-lg ">
                    {favoritedTitles.length > 0 ? (
                        favoritedTitles.map((title) => (
                            <div key={title.mal_id}>
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
