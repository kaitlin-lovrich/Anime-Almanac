import { Link, Outlet } from "react-router-dom";
// import TitleList from "./TitleList";
// import { TitleData } from "../lib/dataTypes";
// import { useContext, useEffect, useMemo } from "react";
// import { AppContext } from "./AppContext";
import "../input.css";
// import TitleList from "./TitleList";

export default function Header() {
    // // Using this in place of actual data for testing purposes
    // const testTitles: TitleData[] = [
    //     {
    //         title_english: "test title 1",
    //         images: {
    //             jpg: {
    //                 image_url: "./android-chrome-192x192.png",
    //             },
    //         },
    //         genres: ["string"],
    //         type: "string",
    //         year: 2024,
    //         rating: "string",
    //         episodes: "string",
    //         duration: "string",
    //         trailer: {
    //             embed_url: "string",
    //         },
    //         mal_id: 998,
    //     },
    //     {
    //         title_english: "test title 2",
    //         images: {
    //             jpg: {
    //                 image_url: "./android-chrome-192x192.png",
    //             },
    //         },
    //         genres: ["string"],
    //         type: "string",
    //         year: 2024,
    //         rating: "string",
    //         episodes: "string",
    //         duration: "string",
    //         trailer: {
    //             embed_url: "string",
    //         },
    //         mal_id: 999,
    //     },
    // ];

    return (
        <>
            <nav className="flex fixed top-0 w-full z-50 justify-between bg-custom-gradient-2 shadow-custom-drop">
                <Link to="/" className="link-logo">
                    <div className="w-72 m-2">
                        <img
                            src="Anime-Almanacs-logo.png"
                            className="w-full drop-shadow-md"
                        />
                    </div>
                </Link>
                <NavButtons />
                {/* <SearchTitles allTitles={testTitles} /> */}
            </nav>

            <Outlet />
        </>
    );
}

function NavButtons() {
    return (
        <div className="flex justify-around p-2">
            <h2 className="text-2xl font-heading text-[#B0B0B0] p-4 sm:text-red-200 md:text-green-200 lg:text-red-800 xl:text-yellow-600">
                Home
            </h2>
            <h2 className="text-2xl font-heading text-[#B0B0B0] p-4">
                TV Shows
            </h2>
            <h2 className="text-2xl font-heading text-[#B0B0B0] p-4">Movies</h2>
            <h2 className="text-2xl font-heading text-[#B0B0B0] p-4">
                My Favorites
            </h2>
        </div>
    );
}
// // Search titles searches titles by name. It takes the user input as they type and matches it against the `allTitles` title data to show a list of all titles matching the user's search query
// type SearchTitlesProps = {
//     allTitles: TitleData[];
// };

// function SearchTitles({ allTitles }: SearchTitlesProps) {
//     const { input, setInput, setSearchedTitlesList, searchedTitlesList } =
//         useContext(AppContext);

//     // Memoize filtered titles to prevent unnecessary re-renders
//     const filteredTitles = useMemo(() => {
//         if (input.trim() === "") {
//             return [];
//         }
//         return allTitles.filter((title) =>
//             title.title_english.toLowerCase().includes(input.toLowerCase())
//         );
//     }, [input, allTitles]);

//     // Use effect to update searched titles list when filtered titles change
//     useEffect(() => {
//         // My original code causing infinite re-renders:
//         setSearchedTitlesList(filteredTitles);

//         // setSearchedTitlesList({ ...filteredTitles }); // This doesnt work either, or using prev

//         // const tempFilteredTitles = filteredTitles;

//         // setSearchedTitlesList({ ...searchedTitlesList, ...tempFilteredTitles });

//         console.log("filteredTitles", filteredTitles); // returns an array with test object
//     }, [filteredTitles, searchedTitlesList, setSearchedTitlesList]);

//     return (
//         <div className="">
//             <SearchInputBar input={input} onChangeInput={setInput} />
//             <TitleList titles={filteredTitles} searchListKey={true} />
//         </div>
//     );
// }

// Chatgpt's refactored version cuts the tie between my 2 components but solves the infinite rerending
// export function SearchTitles({ allTitles }: SearchTitlesProps) {
//     const { input, setInput } = useContext(AppContext);

//     // Memoize filtered titles to prevent unnecessary re-renders
//     const filteredTitles = useMemo(() => {
//         if (input.trim() === "") {
//             return [];
//         }
//         return allTitles.filter((title) =>
//             title.title_english.toLowerCase().includes(input.toLowerCase())
//         );
//     }, [input, allTitles]);

//     // Directly return the filtered titles without updating context state
//     useEffect(() => {
//         // Use filteredTitles directly in render instead of setting it to context
//         console.log("filteredTitles", filteredTitles);
//     }, [filteredTitles]);

//     return (
//         <div>
//             <SearchInputBar input={input} onChangeInput={setInput} />
//         </div>
//     );
// }

// Githubs mock version
// type SearchInputBarProps = {
//     input: string;
//     onChangeInput: (value: string) => void;
// };

// function SearchInputBar({ input, onChangeInput }: SearchInputBarProps) {
//     return (
//         <div className="bg-red-600 p-2 magnifying-glass">
//             <input
//                 value={input}
//                 onChange={(e) => onChangeInput(e.currentTarget.value)}
//                 placeholder="Search"
//             />
//         </div>
//     );
// }

// ChatGpt prompt:
// Code you suggested:
// export function SearchTitles({ allTitles }: SearchTitlesProps) {
//     const { input, setInput } = useContext(AppContext);

//     // Memoize filtered titles to prevent unnecessary re-renders
//     const filteredTitles = useMemo(() => {
//         if (input.trim() === "") {
//             return [];
//         }
//         return allTitles.filter((title) =>
//             title.title_english.toLowerCase().includes(input.toLowerCase())
//         );
//     }, [input, allTitles]);

//     // Directly return the filtered titles without updating context state
//     useEffect(() => {
//         // Use filteredTitles directly in render instead of setting it to context
//         console.log("filteredTitles", filteredTitles);
//     }, [filteredTitles]);

//     return (
//         <div>
//             <SearchInputBar input={input} onChangeInput={setInput} />
//         </div>
//     );
// }

// I used the code you have provided int my Header component where SearchTitles component resides and it solved the infinite rerendering issue but it cut off communications to the HomePage component which displays the filtered titles list. So now the list stays empty and doesnt get updated.

// function SearchTitles({ allTitles }: SearchTitlesProps) {
//     const { input, setInput, setSearchedTitlesList } = useContext(AppContext);

//     // Memoize filtered titles to prevent unnecessary re-renders
//     const filteredTitles = useMemo(() => {
//         if (input.trim() === "") {
//             return [];
//         }
//         return allTitles.filter((title) =>
//             title.title_english.toLowerCase().includes(input.toLowerCase())
//         );
//     }, [input, allTitles]);

//     // Use effect to update searched titles list when filtered titles change
//     useEffect(() => {
//         // My original code causing infinite re-renders:
//         // setSearchedTitlesList(filteredTitles);

//         setSearchedTitlesList((prev: TitleData[]) => ({
//             ...prev,
//             filteredTitles,
//         }));
//         console.log("filteredTitles", filteredTitles); // returns an array with test object
//     }, [filteredTitles, setSearchedTitlesList]);

//     return (
//         <div className="">
//             <SearchInputBar input={input} onChangeInput={setInput} />
//         </div>
//     );
// }

// I then tried altering my useEffect to look like this but i dont think I'm doing this right. What do you suggest? Is this a good way to go about doing this? Is there a better way?
