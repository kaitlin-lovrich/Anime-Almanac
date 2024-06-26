import { useMemo, useState } from "react";
import { TitleData } from "../lib/dataTypes";
import TitleList from "./TitleList";
import "../index.css";
import { IoSearch } from "react-icons/io5";

type SearchTitlesProps = {
    allTitles: TitleData[];
};

// Search titles searches titles by name. It takes the user input as they type and matches it against the `allTitles` title data to show a list of all titles matching the user's search query
export default function SearchTitles({ allTitles }: SearchTitlesProps) {
    const [input, setInput] = useState<string>("");

    // Memoize filtered titles to prevent unnecessary re-renders
    const filteredTitles = useMemo(() => {
        if (input.trim() === "") {
            return [];
        }

        // Filter titles based on the trimmed input
        return allTitles.filter((title) =>
            title.title_english.toLowerCase().includes(input.toLowerCase())
        );
    }, [input, allTitles]);
    console.log("filteredTitles: ", filteredTitles);

    // console.log("ParentComponent: SearchTitles rendered");

    return (
        <div className="mt-8">
            <SearchInputBar input={input} onChangeInput={setInput} />
            {input.trim() !== "" ? (
                filteredTitles.length > 0 ? (
                    <div className="mt-8">
                        <h3 className="text-3xl font-heading px-14 py-2 text-[#B0B0B0]">
                            Search Results
                        </h3>
                        <TitleList
                            titles={filteredTitles}
                            searchListKey={true}
                        />
                    </div>
                ) : (
                    <p>No titles found matching your search.</p>
                )
            ) : (
                // Default message when there's no input
                <p className="text-custom-gray text-xl pt-4">
                    Please enter a search term to find titles.
                </p>
            )}
        </div>
    );
}

type SearchInputBarProps = {
    input: string;
    onChangeInput: (value: string) => void;
};

function SearchInputBar({ input, onChangeInput }: SearchInputBarProps) {
    return (
        <div className="flex bg-custom-gradient-6 px-1 py-2 rounded-md w-[300px] focus-within:ring-2 focus-within:ring-custom-gray">
            <IoSearch className="size-8 lg:size-9 text-custom-gray" />
            <input
                value={input}
                onChange={(e) => onChangeInput(e.currentTarget.value)}
                placeholder="Search"
                className="bg-inherit pl-2 rounded-md w-[230px] text-custom-gray text-lg lg:text-xl font-body focus:outline-none focus:text-custom-white caret-custom-white"
            />
            {/* <input className="search-bar" /> */}
        </div>
    );
}

//  (From HomePage return)
// return (
//         <>
//             <div className="flex flex-wrap justify-center mt-28 mb-24 mx-auto w-1/2">
//  {/* Conditionally render "Search Results" Heading and row (the entire div below) when user clicks on search bar with an onClick, add showSearchResults state to toggle with the onClick*/}
//                 {showSearchResults && <SearchTitles allTitles={testTitles} />}
//                 {genres.map((genre) => (
//                     <GenreTitlesRow key={genre!.mal_id} genre={genre} />
//                 ))}
//                 {lastLoadedGenre !== "Suspense" && <Loading />}
//                 <div ref={loadingRef}></div>
//             </div>
//         </>
//     );
// }

// // Using this in place of actual data for testing purposes
//     const testTitles: TitleData[] = [
//         {
//             title_english: "test title 1",
//             images: {
//                 jpg: {
//                     image_url: "./android-chrome-192x192.png",
//                 },
//             },
//             genres: [{ mal_id: 24, name: "Sci-Fi" }],
//             type: "string",
//             year: 2024,
//             rating: "string",
//             episodes: "string",
//             duration: "string",
//             synopsis: "string",
//             trailer: {
//                 embed_url: "string",
//             },
//             mal_id: 998,
//         },
//         {
//             title_english: "test title 2",
//             images: {
//                 jpg: {
//                     image_url: "./android-chrome-192x192.png",
//                 },
//             },
//             genres: [{ mal_id: 24, name: "Sci-Fi" }],
//             type: "string",
//             year: 2024,
//             rating: "string",
//             episodes: "string",
//             duration: "string",
//             synopsis: "string",
//             trailer: {
//                 embed_url: "string",
//             },
//             mal_id: 999,
//         },
//     ];
