import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AppContext } from './AppContext';

export default function Header() {

    return (
        <>
            <nav className="flex lg:fixed top-0 w-full z-50 md:justify-between bg-custom-gradient-2 shadow-custom-drop">
                <Link to="/" className="link-logo">
                    <div className="w-60 lg:w-72 m-1 lg:m-2">
                        <img
                            src="Anime-Almanacs-logo.png"
                            className="w-full drop-shadow-md"
                        />
                    </div>
                </Link>
                <div className="md:flex hidden justify-around items-center p-2 text-custom-gray md:*:text-xl lg:*:text-2xl *:font-heading *:p-4 *:cursor-pointer hover:*:text-custom-white hover:*:scale-105 active:*:scale-105 *:duration-300">
                    <DesktopNavigation />
                </div>
            </nav>
            <div className="flex md:hidden justify-around bg-custom-gradient-5 items-center mx-auto w-[60%] max-w-[325px] mt-[1rem] rounded-lg text-custom-gray *:text-lg *:font-heading *:p-1.5 *:cursor-pointer hover:*:text-custom-white hover:*:scale-105 active:*:scale-105 *:duration-300">
                <FilterOptions />
            </div>

      <Outlet />
    </>
  );
}



function DesktopNavigation() {
    const { filter, setFilter } = useContext(AppContext);

    return (
        <>
            <span onClick={() => setFilter(null)} className={filter === null ? 'text-custom-white' : ''}
               >Home</span>
            <FilterOptions />
            <span>My Favorites</span>
        </>
    );
}



function FilterOptions() {
    const { filter, setFilter } = useContext(AppContext);

    return (
        <>
            <span onClick={() => setFilter('TV Shows')} className={filter === "TV Shows" ? 'text-custom-white' : ''} >TV Shows</span>
            <span onClick={() => setFilter('Movies')} className={filter === "Movies" ? 'text-custom-white' : ''} >Movies</span>
        </>
    );
}
