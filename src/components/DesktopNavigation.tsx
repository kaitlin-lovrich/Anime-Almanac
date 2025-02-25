import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext, FilterOptions } from "./index";

export function DesktopNavigation() {
    const { filter, setFilter } = useContext(AppContext);

    return (
        <>
            <Link to="/">
                <span
                    onClick={() => setFilter("Home")}
                    className={filter === "Home" ? "text-custom-white" : ""}
                >
                    Home
                </span>
            </Link>
            <FilterOptions />
            <Link to="/my-favorites">
                <span
                    onClick={() => setFilter("My Favorites")}
                    className={
                        filter === "My Favorites" ? "text-custom-white" : ""
                    }
                >
                    My Favorites
                </span>
            </Link>
        </>
    );
}
