import { useEffect, useContext } from "react";
import {
    AppContext,
    Footer,
    SearchTitles,
    SearchResults,
    LoadGenres,
} from "../components/index";

export function HomePage() {
    const { isInputFocussed, isSearchBarIconClicked } = useContext(AppContext);

    useEffect(() => {
        // Scroll to the top of the page when the input is focused
        if (isInputFocussed || isSearchBarIconClicked) {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, [isInputFocussed, isSearchBarIconClicked]);

    return (
        <>
            <div className="flex flex-wrap justify-center mt-0 lg:mt-12 xl:mt-20 mb-24 mx-auto w-full lg:w-1/2 h-screen">
                <div>
                    <div className="hidden md:block lg:hidden mt-8">
                        <SearchTitles />
                    </div>
                    <SearchResults />
                    <LoadGenres />
                </div>
            </div>
            <Footer />
        </>
    );
}
