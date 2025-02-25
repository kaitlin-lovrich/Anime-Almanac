import { useContext, useEffect, useState } from "react";
import { GenreType, Title, TitleData } from "../lib/dataTypes";
import { AppContext, Genre, TitleList, Loading, ErrorMessage } from "./index";

type GenreTitlesRowProps = {
    genre: GenreType | undefined;
};

export function GenreTitlesRow({ genre }: GenreTitlesRowProps) {
    const [genreTitles, setGenreTitles] = useState<TitleData[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const { filter } = useContext(AppContext);

    useEffect(() => {
        let isMounted = true; // tracks mounted state
        setIsLoading(true);
        async function loadTitles() {
            try {
                const typeFilter =
                    filter === "TV Shows"
                        ? "tv"
                        : filter === "Movies"
                        ? "movie"
                        : "";
                // Formulate the API endpoint URL with the filter and genre
                const response = await fetch(
                    `https://api.jikan.moe/v4/anime?order_by=popularity&genres=${
                        genre!.mal_id
                    }${typeFilter ? `&type=${typeFilter}` : ""}`
                );

                if (!response.ok)
                    throw new Error(`HTTP error! Status: ${response.status}`);

                let titlesArray: Title;
                try {
                    titlesArray = await response.json();
                    // console.log('titlesArray.data', titlesArray.data);
                } catch (jsonError) {
                    throw new Error("Error parsing JSON response");
                }

                if (isMounted) setGenreTitles(titlesArray.data);
            } catch (err) {
                // Type checking
                if (err instanceof Error) {
                    // Handle both fetch and JSON parsing errors
                    console.error(
                        `Error fetching titles for ${
                            genre!.name
                        }. Error: ${err}`
                    );
                    if (isMounted) {
                        setError(err.message);
                    }
                }
            } finally {
                if (isMounted) setIsLoading(false);
            }
        }
        loadTitles();

        // Cleanup function to set isMounted to false when the component unmounts
        return () => {
            isMounted = false;
        };
    }, [filter, genre]);

    // Render error message if it exists
    if (error) {
        return <ErrorMessage error={error} />;
    }

    if (isLoading || genreTitles.length === 0) {
        return <Loading />;
    }

    return (
        <div className="mt-4 sm:mt-6 md:mt-8">
            <Genre key={genre!.mal_id} genre={genre!.name} />
            <TitleList titles={genreTitles} />
        </div>
    );
}
