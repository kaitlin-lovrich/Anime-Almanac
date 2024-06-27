import { useEffect, useState } from "react";
import { Title, TitleData } from "../lib/dataTypes";
import TitleList from "./TitleList";
import "../index.css";
import { IoSearch } from "react-icons/io5";
import Loading from "./Loading";

export default function SearchTitles() {
    const [input, setInput] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [searchTitles, setSearchTitles] = useState<TitleData[]>([]);

    useEffect(() => {
        // Only perform the search if input is not empty
        if (input.trim() === "") {
            setSearchTitles([]);
            setIsLoading(false);
            return;
        }

        setIsLoading(true);
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
                setIsLoading(false);
            }
        }

        const debounceTimer = setTimeout(loadSearchTitles, 500); // Debounce for 500ms

        return () => clearTimeout(debounceTimer); // Cleanup debounce timer on input change
    }, [input]);

    if (isLoading) {
        <SearchInputBar input={input} onChangeInput={setInput} />;
        <div className="mt-8">
            <h3 className="text-3xl font-heading px-14 py-2 text-[#B0B0B0]">
                Search Results
            </h3>
            <Loading />;
        </div>;
    }

    return (
        <div className="mt-8">
            <SearchInputBar input={input} onChangeInput={setInput} />
            {input.trim() !== "" && (
                <div className="mt-8">
                    <h3 className="text-3xl font-heading px-14 py-2 text-[#B0B0B0]">
                        Search Results:
                    </h3>
                    {searchTitles.length > 0 ? (
                        <TitleList titles={searchTitles} searchListKey={true} />
                    ) : (
                        <p className="text-custom-gray text-xl pt-4">
                            No titles found matching your search.
                        </p>
                    )}
                </div>
            )}
        </div>
    );
}

type SearchInputBarProps = {
    input: string;
    onChangeInput: (value: string) => void;
};

export function SearchInputBar({ input, onChangeInput }: SearchInputBarProps) {
    return (
        <div className="flex bg-custom-gradient-6 px-1 py-2 rounded-md w-[300px] focus-within:ring-2 focus-within:ring-custom-gray">
            <IoSearch className="size-8 lg:size-9 text-custom-gray" />
            <input
                value={input}
                onChange={(e) => onChangeInput(e.currentTarget.value)}
                placeholder="Search"
                className="bg-inherit pl-2 rounded-md w-[230px] text-custom-gray text-lg lg:text-xl font-body focus:outline-none focus:text-custom-white caret-custom-white"
            />
        </div>
    );
}
