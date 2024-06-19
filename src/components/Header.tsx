import { Link, Outlet } from 'react-router-dom';

export default function Header() {
    return (
        <>
            <nav className="flex fixed top-0 w-full z-50 justify-center lg:justify-between bg-custom-gradient-2 shadow-custom-drop">
                <Link to="/" className="link-logo">
                    <div className="w-64 sm:w-72 m-1 sm:m-2">
                        <img
                            src="Anime-Almanacs-logo.png"
                            className="w-full drop-shadow-md"
                        />
                    </div>
                </Link>
                <div className="lg:flex hidden justify-around items-center p-2 *:text-[#B0B0B0] *:text-2xl *:font-heading *:p-4">
                    <DesktopNavigation />
                </div>
            </nav>
            <div className="flex lg:hidden justify-around bg-custom-gradient-5 items-center mx-auto w-[80%] max-w-[350px] sm:max-w-[425px] md:w-[65%] md:max-w-[65%] mt-[5.5rem] sm:mt-[6.5rem] rounded-lg *:text-[#B0B0B0] *:text-xl sm:*:text-2xl *:font-heading *:p-3">
                <FilterButtons />
            </div>

      <Outlet />
    </>
  );
}

function DesktopNavigation() {
    return (
        <>
            <span>Home</span>
            <FilterButtons />
            <span>My Favorites</span>
        </>
    );
}

function FilterButtons() {
    return (
        <>
            <button>TV Shows</button>
            <button>Movies</button>
        </>
    );
}
