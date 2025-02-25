import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "./index";

export function FilterOptions() {
    const { filter, setFilter } = useContext(AppContext);

    return (
        <>
            <Link
                to="/"
                onClick={() => setFilter("TV Shows")}
                className={filter === "TV Shows" ? "text-custom-white" : ""}
            >
                TV Shows
            </Link>
            <Link
                to="/"
                onClick={() => setFilter("Movies")}
                className={filter === "Movies" ? "text-custom-white" : ""}
            >
                Movies
            </Link>
        </>
    );
}
