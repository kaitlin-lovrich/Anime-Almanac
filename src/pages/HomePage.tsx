import { useEffect, useState, useRef } from "react";
import { type GenreType } from "../lib/dataTypes";
import GenreTitlesRow from "../components/GenreTitlesRow";
import { genreData, genresToLoad } from "../lib/genreData";
import Loading from "../components/Loading";
import Footer from "../components/Footer";

export default function HomePage() {
  const [genres, setGenres] = useState<(GenreType | undefined)[]>([]);
  const [loadedGenresCount, setLoadedGenresCount] = useState(2);
  const [lastLoadedGenre, setLastLoadedGenre] = useState<string | null>(null);
  const loadingRef = useRef(null);

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
            setGenres((prevGenres) => [...prevGenres, nextGenreToLoad]);
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
        if (entry.isIntersecting && loadedGenresCount < genresToLoad.length) {
          loadMoreGenres();
        }
      },
      {
        rootMargin: '290px',
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
            <div className="flex flex-wrap justify-center mt-0 lg:mt-20 mb-24 mx-auto w-1/2">
                {genres.map((genre) => (
                    <GenreTitlesRow key={genre!.mal_id} genre={genre} />
                ))}
                {lastLoadedGenre !== "Suspense" && <Loading />}
                <div ref={loadingRef}></div>
            </div>
            <Footer />
        </>
    );
}
