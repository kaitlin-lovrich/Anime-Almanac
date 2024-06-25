import { useContext } from "react";
import { FaRegHeart } from "react-icons/fa";
import { HiMiniHome } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { AppContext } from "./AppContext";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <>
            <nav className="md:hidden flex fixed bottom-0 w-full z-50 justify-center bg-custom-gradient-1 shadow-custom-drop">
                <div className="p-1.5 w-[80%] max-w-[400px] sm:max-w-[425px] md:w-[65%] md:max-w-[65%]">
                    <div className="flex justify-center bg-custom-gradient-4 rounded-lg text-custom-gray *:*:size-14 *:*:px-1.5 *:*:mx-4 sm:*:*:mx-6 *:drop-shadow-xl *:cursor-pointer hover:*:text-custom-white hover:*:scale-110 active:*:scale-110 *:duration-300">
                        <MobileNavigation />
                    </div>
                </div>
            </nav>
        </>
    );
}

function MobileNavigation() {
    const { filter, setFilter } = useContext(AppContext);

    return (
        <>
            <Link to="/">
                <HiMiniHome
                    onClick={() => setFilter("Home")}
                    className={filter === "Home" ? "text-custom-white" : ""}
                />
            </Link>
            <span>
                <IoSearch />
            </span>
            <Link to="/my-favorites">
                <FaRegHeart
                    onClick={() => setFilter("My Favorites")}
                    className={
                        filter === "My Favorites" ? "text-custom-white" : ""
                    }
                />
            </Link>
        </>
    );
}
