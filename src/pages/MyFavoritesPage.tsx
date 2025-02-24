import { useContext, useEffect } from "react";
import { AppContext, Footer, FavoriteTitleCard } from "../components/index";

export function MyFavoritesPage() {
    const { setFilter, favoritedTitles } = useContext(AppContext);

    useEffect(() => {
        setFilter("My Favorites");
    }, [setFilter]);

    return (
        <>
            <div className="flex justify-center flex-col mx-auto mt-5 lg:mt-28 mb-24 w-[90%] lg:w-[85%] lg:max-w-[1060px] text-custom-white gap-5 md:gap-8">
                <h2 className="text-3xl md:text-4xl lg:text-5xl text-custom-white font-bold">
                    My Favorites
                </h2>
                <div className="flex flex-col gap-4 md:gap-8 text-lg min-w-[330px]">
                    {favoritedTitles.length > 0 ? (
                        favoritedTitles.map((title) => (
                            <div
                                key={title.mal_id}
                                className="flex justify-center gap-4 md:gap-8 sm:p-6 sm:bg-[rgba(78,54,54,0.85)]  sm:shadow-custom-inset rounded-lg"
                            >
                                <FavoriteTitleCard title={title} />
                            </div>
                        ))
                    ) : (
                        <p className="flex justify-center h-screen text-xl md:text-2xl lg:3xl">
                            No saved titles
                        </p>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
}
