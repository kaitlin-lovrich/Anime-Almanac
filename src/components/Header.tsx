import { Link, Outlet } from 'react-router-dom';

export default function Header() {
    return (
        <>
            <nav className="flex fixed top-0 w-full z-50 justify-center lg:justify-between bg-custom-gradient-2 shadow-custom-drop">
                <Link to="/" className="link-logo">
                    <div className="w-72 m-2">
                        <img
                            src="Anime-Almanacs-logo.png"
                            className="w-full drop-shadow-md"
                        />
                    </div>
                </Link>
                <DesktopNavigation />
            </nav>

      <Outlet />
    </>
  );
}

function DesktopNavigation() {
    return (
        <div className="flex justify-around p-2 *:hidden *:lg:block">
            <h2 className="text-2xl font-heading text-[#B0B0B0] p-4 sm:text-red-200 md:text-green-200 lg:text-red-800 xl:text-yellow-600">
                Home
            </h2>
            <h2 className="text-2xl font-heading text-[#B0B0B0] p-4">
                TV Shows
            </h2>
            <h2 className="text-2xl font-heading text-[#B0B0B0] p-4">Movies</h2>
            <h2 className="text-2xl font-heading text-[#B0B0B0] p-4">
                My Favorites
            </h2>
        </div>
    );
}
