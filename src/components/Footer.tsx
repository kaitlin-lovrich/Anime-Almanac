import { useContext, useEffect, useState } from "react";
import { FaChevronLeft, FaRegHeart } from "react-icons/fa";
import { HiMiniHome } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { AppContext } from "./AppContext";
import { Link } from "react-router-dom";
import SearchTitles from "./SearchTitles";

export default function Footer() {
    const { isInputFocussed, isSearchBarIconClicked } = useContext(AppContext);

    useEffect(() => {
        // Scroll to the top of the page when the input is focused or when search icon is clicked
        setTimeout(() => {
            if (isInputFocussed || isSearchBarIconClicked) {
                window.scrollTo({ top: 0, behavior: "smooth" });
            }
        }, 300);
    }, [isInputFocussed, isSearchBarIconClicked]);

    return (
        <>
            <MobileNavigation />
        </>
    );
}

function MobileNavigation() {
    const { filter, setFilter } = useContext(AppContext);
    const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);

    return (
        <>
            <nav className="md:hidden flex items-center fixed bottom-0 w-full z-50 justify-center bg-custom-gradient-1 shadow-custom-drop">
                {isSearchBarOpen && (
                    <span>
                        <FaChevronLeft
                            onClick={() => setIsSearchBarOpen(!isSearchBarOpen)}
                            className="pr-3 size-8 text-custom-gray hover:cursor-pointer hover:scale-110 hover:text-custom-white duration-300"
                        />
                    </span>
                )}
                <div className="p-1.5 w-[80%] max-w-[400px] sm:max-w-[425px] md:w-[65%] md:max-w-[65%]">
                    <div
                        className={`${
                            isSearchBarOpen
                                ? `focus-within:ring-2 focus-within:ring-custom-gray`
                                : `justify-center *:*:mx-4`
                        } flex bg-custom-gradient-4 rounded-lg text-custom-gray *:*:size-14 *:*:px-1.5  sm:*:*:mx-6 *:drop-shadow-xl *:cursor-pointer hover:*:text-custom-white hover:*:scale-110 active:*:scale-110 *:duration-300`}
                    >
                        {!isSearchBarOpen && (
                            <Link to="/">
                                <HiMiniHome
                                    onClick={() => setFilter("Home")}
                                    className={
                                        filter === "Home"
                                            ? "text-custom-white"
                                            : ""
                                    }
                                />
                            </Link>
                        )}

                        {!isSearchBarOpen && (
                            <span
                                onClick={() =>
                                    setIsSearchBarOpen(!isSearchBarOpen)
                                }
                            >
                                <IoSearch />
                            </span>
                        )}
                        {isSearchBarOpen && (
                            <div className="flex no-hover-effect">
                                <SearchTitles mobile={true} />
                            </div>
                        )}
                        {!isSearchBarOpen && (
                            <Link to="/my-favorites">
                                <FaRegHeart
                                    onClick={() => setFilter("My Favorites")}
                                    className={
                                        filter === "My Favorites"
                                            ? "text-custom-white"
                                            : ""
                                    }
                                />
                            </Link>
                        )}
                    </div>
                </div>
            </nav>
        </>
    );
}
