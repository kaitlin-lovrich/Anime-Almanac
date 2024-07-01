import { useContext, useEffect } from "react";
import { Title } from "../lib/dataTypes";
import TitleList from "./TitleList";
import "../index.css";
import { IoSearch } from "react-icons/io5";
import Loading from "./Loading";
import { AppContext } from "./AppContext";
import { useLocation, useNavigate } from "react-router-dom";

type SearchTitlesProps = {
    mobile?: boolean;
};

export default function SearchTitles({ mobile }: SearchTitlesProps) {
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
                // Remove duplicates by mal_id
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

        const debounceTimer = setTimeout(loadSearchTitles, 1200);

        return () => clearTimeout(debounceTimer); // Cleanup debounce timer on input change
    }, [input, setIsSearchLoading, setSearchTitles]);

    return (
        <div className="flex md:flex-col">
            <div className="mx-auto">
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
            } flex px-1 py-2 rounded-md w-full md:w-[300px] lg:w-full lg:max-w-[330px]`}
        >
            <span className="w-11">
                <IoSearch
                    className="size-8 xl:size-9 text-custom-gray"
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
                className="bg-inherit rounded-md w-max md:w-[290px] lg:w-[170px] xl:w-full text-custom-gray text-lg xl:text-xl font-body focus:outline-none focus:text-custom-white caret-custom-white pr-4"
            />
        </div>
    );
}

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
