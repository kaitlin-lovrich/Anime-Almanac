import { useContext } from "react";
import { TitleList, Loading, AppContext } from "./index";

export function SearchResults() {
    const { input, isSearchLoading, searchTitles } = useContext(AppContext);

    return (
        <>
            {input.trim() !== "" && (
                <div className="mt-8">
                    <h3 className="text-2xl md:text-3xl font-heading pl-5 md:pl-7 py-2 text-custom-white">
                        Search Results:
                    </h3>
                    {isSearchLoading ? (
                        <Loading searchResults={true} />
                    ) : searchTitles.length > 0 ? (
                        <TitleList titles={searchTitles} searchListKey={true} />
                    ) : (
                        <p className="text-custom-gray text-xl pt-4 h-[320px]">
                            No titles found matching your search.
                        </p>
                    )}
                </div>
            )}
        </>
    );
}
