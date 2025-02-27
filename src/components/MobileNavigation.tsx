import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext, SearchTitles } from "./index";
import { FaChevronLeft, FaRegHeart } from "react-icons/fa";
import { HiMiniHome } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";

export function MobileNavigation() {
    const { filter, setFilter } = useContext(AppContext);
    const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);

    return (
        <>
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
                                    filter === "Home" ? "text-custom-white" : ""
                                }
                            />
                        </Link>
                    )}

                    {!isSearchBarOpen && (
                        <span
                            onClick={() => setIsSearchBarOpen(!isSearchBarOpen)}
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
        </>
    );
}
