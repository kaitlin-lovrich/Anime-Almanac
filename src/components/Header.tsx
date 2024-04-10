import { Link, Outlet } from "react-router-dom";

type HeaderProps = {
    children: React.ReactNode;
};

export default function Header({ children }: HeaderProps) {
    return (
        <>
            <nav className="flex fixed top-0 w-full z-1 justify-between bg-custom-gradient-2 shadow-custom-drop">
                <Link to="/" className="link-logo">
                    <div className="w-72 m-2">
                        <img
                            src="Anime-Almanacs-logo.png"
                            className="w-full drop-shadow-md"
                        />
                    </div>
                </Link>
                <NavButtons />
                <div>
                    <h2>Search</h2>
                </div>
            </nav>
            <div>{children}</div>
            <Outlet />
        </>
    );
}

function NavButtons() {
    return (
        <div className="flex justify-around p-2">
            <h2 className="text-2xl font-heading text-[#B0B0B0] p-4">Home</h2>
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
