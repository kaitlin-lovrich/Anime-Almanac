import { useState, useRef, useEffect } from "react";
import { GenreType, genreData, genreNames } from "../lib/index";
import { GenreTitlesRow, Loading } from "./index";

export function LoadGenres() {
    const [genres, setGenres] = useState<(GenreType | undefined)[]>([]);
    const [loadedGenresCount, setLoadedGenresCount] = useState(2);
    const [lastLoadedGenre, setLastLoadedGenre] = useState<string | null>(null);
    const loadingRef = useRef(null);

    // useEffect to load the initial genres
    useEffect(() => {
        const firstGenre = genreData.find(
            (genre) => genre.name === genreNames[0]
        );
        if (firstGenre) {
            setGenres([firstGenre]);
            setLastLoadedGenre(firstGenre.name);
        }

        const timerId = setTimeout(() => {
            const secondGenre = genreData.find(
                (genre) => genre.name === genreNames[1]
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
        // Use timeout to avoid exceeding the rate limit of 3 calls per second
        let timerId: number | NodeJS.Timeout;
        async function loadMoreGenres() {
            try {
                // Stores next genre name from genreNames list, (slice returns a new array containing the next "genre name")
                const nextGenre = genreNames.slice(
                    loadedGenresCount,
                    loadedGenresCount + 1
                );
                // Converts array containing "genre name" into a string
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
                    loadedGenresCount < genreNames.length
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
            <div>
                {genres.map((genre) => (
                    <GenreTitlesRow key={genre!.mal_id} genre={genre} />
                ))}
                {lastLoadedGenre !== "Suspense" && <Loading />}
                <div ref={loadingRef}></div>
            </div>
        </>
    );
}
