import { useContext, useEffect } from "react";
import { Title } from "../lib/dataTypes";
import { AppContext } from "./index";
import "../index.css";
import { IoSearch } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";

type SearchTitlesProps = {
    mobile?: boolean;
};

export function SearchTitles({ mobile }: SearchTitlesProps) {
    const { input, setInput, setIsSearchLoading, setSearchTitles } =
        useContext(AppContext);

    useEffect(() => {
        // Only perform the search if input is not empty
        if (input.trim() === "") {
            setSearchTitles([]);
            setIsSearchLoading(false);
            return;
        }

        setIsSearchLoading(true);
        async function loadSearchTitles() {
            try {
                const response = await fetch(
                    `https://api.jikan.moe/v4/anime?order_by=popularity&q=${input}`
                );
                if (!response.ok)
                    throw new Error(`HTTP error! Status: ${response.status}`);
                const titlesArray: Title = await response.json();
                // Remove duplicates by mal_id. The Map object stores the first instance of each mal_id and overwrites duplicates with the same key, ensuring uniqueness
                const uniqueTitles = Array.from(
                    new Map(
                        titlesArray.data.map((item) => [item.mal_id, item])
                    ).values()
                );
                setSearchTitles(uniqueTitles);
            } catch (err) {
                console.error(`Error: ${err}`);
            } finally {
                setIsSearchLoading(false);
            }
        }
        // Aviods excessive calls to the API as the user types each letter
        const debounceTimer = setTimeout(loadSearchTitles, 1200);

        return () => clearTimeout(debounceTimer); // Cleanup debounce timer on input change
    }, [input, setIsSearchLoading, setSearchTitles]);

    return (
        <div className="flex margin-0 md:flex-col">
            <div className="flex mx-auto items-center">
                <SearchInputBar
                    input={input}
                    onChangeInput={setInput}
                    mobile={mobile}
                />
            </div>
        </div>
    );
}

type SearchInputBarProps = {
    input: string;
    onChangeInput: (value: string) => void;
    mobile?: boolean;
};

export function SearchInputBar({
    input,
    onChangeInput,
    mobile,
}: SearchInputBarProps) {
    const navigate = useNavigate();
    const { setIsInputFocussed, setIsSearchBarIconClicked, setFilter } =
        useContext(AppContext);

    const location = useLocation();

    // If user is not on a browsing page, navigate them to the home browsing page
    function handleSearchIconDown() {
        setIsSearchBarIconClicked(true);
        if (
            location.pathname.includes("/title-page") ||
            location.pathname.includes("/my-favorites")
        ) {
            setFilter("Home");
            navigate(`/`);
        }
    }

    return (
        <div
            className={`${
                mobile
                    ? ``
                    : `bg-custom-gradient-6 focus-within:ring-2 focus-within:ring-custom-gray`
            } flex px-1 py-1 md:py-1.5 lg:py-1 xl:py-1.5 rounded-md w-full md:w-[300px] lg:w-full lg:max-w-[330px]`}
        >
            <span className="w-9 xl:w-11">
                <IoSearch
                    className="size-7 xl:size-8 text-custom-gray"
                    onMouseDown={() => handleSearchIconDown()}
                    onMouseUp={() => setIsSearchBarIconClicked(false)}
                />
            </span>
            <input
                value={input}
                onChange={(e) => onChangeInput(e.currentTarget.value)}
                onFocus={() => setIsInputFocussed(true)}
                onBlur={() => setIsInputFocussed(false)}
                placeholder="Search Titles"
                className="bg-inherit rounded-md w-max md:w-[290px] lg:w-[170px] xl:w-full text-custom-gray text-base xl:text-xl font-body focus:outline-none focus:text-custom-white caret-custom-white pr-4 self-end"
            />
        </div>
    );
}
