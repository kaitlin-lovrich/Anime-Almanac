import { useEffect, useState, useRef, useContext, useMemo } from "react";
import { TitleData, type GenreType } from "../lib/dataTypes";
import GenreTitlesRow from "../components/GenreTitlesRow";
import { genreData, genresToLoad } from "../lib/genreData";
import Loading from "../components/Loading";
import TitleList from "../components/TitleList";
import { AppContext } from "../components/AppContext";

export default function HomePage() {
    const [genres, setGenres] = useState<(GenreType | undefined)[]>([]);
    const [loadedGenresCount, setLoadedGenresCount] = useState(2);
    const [lastLoadedGenre, setLastLoadedGenre] = useState<string | null>(null);
    const loadingRef = useRef(null);

    // Using this in place of actual data for testing purposes
    const testTitles: TitleData[] = [
        {
            title_english: "test title 1",
            images: {
                jpg: {
                    image_url: "./android-chrome-192x192.png",
                },
            },
            genres: ["string"],
            type: "string",
            year: 2024,
            rating: "string",
            episodes: "string",
            duration: "string",
            trailer: {
                embed_url: "string",
            },
            mal_id: 998,
        },
        {
            title_english: "test title 2",
            images: {
                jpg: {
                    image_url: "./android-chrome-192x192.png",
                },
            },
            genres: ["string"],
            type: "string",
            year: 2024,
            rating: "string",
            episodes: "string",
            duration: "string",
            trailer: {
                embed_url: "string",
            },
            mal_id: 999,
        },
    ];

    // useEffect to load the initial genres
    useEffect(() => {
        const firstGenre = genreData.find(
            (genre) => genre.name === genresToLoad[0]
        );
        if (firstGenre) {
            setGenres([firstGenre]);
            setLastLoadedGenre(firstGenre.name);
        }

        const timerId = setTimeout(() => {
            const secondGenre = genreData.find(
                (genre) => genre.name === genresToLoad[1]
            );
            if (secondGenre) {
                setGenres((prevGenres) => [...prevGenres, secondGenre]);
                setLastLoadedGenre(secondGenre.name);
            }
        }, 2000);

        return () => clearTimeout(timerId);
    }, []); // Empty dependency array, runs only once on mount

    // useEffect for intersection observer to load more genres
    useEffect(() => {
        let timerId: number | NodeJS.Timeout;
        async function loadMoreGenres() {
            try {
                // Logic for loading genres
                const nextGenre = genresToLoad.slice(
                    loadedGenresCount,
                    loadedGenresCount + 1
                );
                const nextGenreName = nextGenre.join();
                timerId = setTimeout(() => {
                    const nextGenreToLoad = genreData.find(
                        (genre) => genre.name === nextGenreName
                    );
                    if (nextGenreToLoad) {
                        setGenres((prevGenres) => [
                            ...prevGenres,
                            nextGenreToLoad,
                        ]);
                        setLoadedGenresCount((count) => count + 1);
                        setLastLoadedGenre(nextGenreName);
                        console.log(nextGenreName);
                    }
                }, 3500);
            } catch (err) {
                console.error(`Error loading more genres: ${err}`);
            }
        }

        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (
                    entry.isIntersecting &&
                    loadedGenresCount < genresToLoad.length
                ) {
                    loadMoreGenres();
                }
            },
            {
                rootMargin: "290px",
            }
        );

        if (loadingRef.current) {
            observer.observe(loadingRef.current);
        }

        return () => {
            clearTimeout(timerId);
            observer.disconnect();
        };
    }, [loadedGenresCount]);

    return (
        <>
            {/* Conditionally render "Search Results" Heading and row (the entire div below) when user clicks on search bar with an onClick */}
            <div className="flex flex-wrap justify-center mt-28 mb-24 mx-auto w-1/2">
                <SearchTitles allTitles={testTitles} />
            </div>
            <div className="flex flex-wrap justify-center mt-28 mb-24 mx-auto w-1/2">
                {genres.map((genre) => (
                    <GenreTitlesRow key={genre!.mal_id} genre={genre} />
                ))}
                {lastLoadedGenre !== "Suspense" && <Loading />}
                <div ref={loadingRef}></div>
            </div>
        </>
    );
}

// Search titles searches titles by name. It takes the user input as they type and matches it against the `allTitles` title data to show a list of all titles matching the user's search query
type SearchTitlesProps = {
    allTitles: TitleData[];
};

function SearchTitles({ allTitles }: SearchTitlesProps) {
    const { input, setInput } = useContext(AppContext);

    // Memoize filtered titles to prevent unnecessary re-renders
    const filteredTitles = useMemo(() => {
        if (input.trim() === "") {
            return [];
        }
        return allTitles.filter((title) =>
            title.title_english.toLowerCase().includes(input.toLowerCase())
        );
    }, [input, allTitles]);
    console.log("filteredTitles: ", filteredTitles);

    console.log("ParentComponent: SearchTitles rendered");

    return (
        <div className="">
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
                <p>Please enter a search term to find titles.</p>
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
        <div className="bg-red-600 p-2 magnifying-glass">
            <input
                value={input}
                onChange={(e) => onChangeInput(e.currentTarget.value)}
                placeholder="Search"
            />
        </div>
    );
}

// Search component results list
// SearchedTitlesList is just TitleList renamed for better readability
// type SearchTitleListProps = {
//     searchTitleList: TitleData[];
// };

// function SearchTitleList({ searchTitleList }: SearchTitleListProps) {
//     return (
//         <div className="mt-8">
//             <h3 className="text-3xl font-heading px-14 py-2 text-[#B0B0B0]">
//                 Search Results
//             </h3>
//             <TitleList titles={searchTitleList} searchListKey={true} />
//         </div>
//     );
// }

// // Use effect to update searched titles list when filtered titles change
// useEffect(() => {
//     // My original code causing infinite re-renders:
//     setSearchedTitlesList(filteredTitles);

//     // setSearchedTitlesList({ ...filteredTitles }); // This doesnt work either, or using prev

//     // const tempFilteredTitles = filteredTitles;

//     // setSearchedTitlesList({ ...searchedTitlesList, ...tempFilteredTitles });

//     console.log("filteredTitles", filteredTitles); // returns an array with test object
// }, [filteredTitles, searchedTitlesList, setSearchedTitlesList]);
