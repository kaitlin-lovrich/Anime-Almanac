import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AppContext } from './AppContext';

export default function Header() {

    return (
        <>
            <nav className="flex lg:fixed top-0 w-full z-50 md:justify-between bg-custom-gradient-2 shadow-custom-drop">
                <Link to="/" className="link-logo">
                    <div className="w-52 md:w-60 lg:w-72 m-1 lg:m-2">
                        <img
                            src="Anime-Almanacs-logo.png"
                            className="w-full drop-shadow-md"
                        />
                    </div>
                </Link>
                <div className="md:flex hidden justify-around items-center p-2 *:text-[#B0B0B0] md:*:text-xl lg:*:text-2xl *:font-heading *:p-4">
                    <DesktopNavigation />
                </div>
            </nav>
            <div className="flex md:hidden justify-around bg-custom-gradient-5 items-center mx-auto w-[60%] max-w-[325px] mt-[1rem] rounded-lg *:text-[#B0B0B0] *:text-lg *:font-heading *:p-1.5">
                <FilterButtons />
            </div>

      <Outlet />
    </>
  );
}



function DesktopNavigation() {
    const { setFilter } = useContext(AppContext);

    return (
        <>
            <button onClick={() => setFilter(null)}>Home</button>
            <FilterButtons />
            <span>My Favorites</span>
        </>
    );
}



function FilterButtons() {
    const { setFilter } = useContext(AppContext);

    return (
        <>
            <button onClick={() => setFilter('TV Shows')}>TV Shows</button>
            <button onClick={() => setFilter('Movies')}>Movies</button>
        </>
    );
}
