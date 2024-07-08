import { useContext } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { AppContext } from "./AppContext";
import SearchTitles from "./SearchTitles";

export default function Header() {
    const { setFilter } = useContext(AppContext);
    const location = useLocation();

    return (
        <>
            <nav className="flex lg:fixed py-0.5 xl:py-1 top-0 w-full z-50 md:justify-between bg-custom-gradient-2 shadow-custom-drop">
                <Link to="/" className="link-logo">
                    <div className="w-48 xl:w-56 hover:scale-105 duration-300">
                        <img
                            onClick={() => setFilter("Home")}
                            src="/Anime-Almanacs-logo.png"
                            className="w-full drop-shadow-md"
                        />
                    </div>
                </Link>
                <div className="md:flex hidden justify-around items-center p-2 text-custom-gray md:*:text-xl xl:*:text-2xl *:font-heading *:px-4 *:cursor-pointer hover:*:text-custom-white hover:*:scale-105 active:*:scale-105 *:duration-300">
                    <DesktopNavigation />
                </div>

                <div className="hidden lg:block pr-4 self-center">
                    <SearchTitles />
                </div>
            </nav>
            {location.pathname === "/" && (
                <div className="flex md:hidden justify-around bg-custom-gradient-5 items-center mx-auto w-[60%] max-w-[325px] mt-[1rem] rounded-lg text-custom-gray *:text-lg *:font-heading *:p-1.5 *:cursor-pointer hover:*:text-custom-white hover:*:scale-105 active:*:scale-105 *:duration-300">
                    <FilterOptions />
                </div>
            )}
            <Outlet />
        </>
    );
}

function DesktopNavigation() {
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

function FilterOptions() {
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
