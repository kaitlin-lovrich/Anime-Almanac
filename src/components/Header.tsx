type HeaderProps = {
    children: React.ReactNode;
};

export default function Header({ children }: HeaderProps) {
    return (
        <>
            <nav className="flex fixed top-0 w-full z-1 justify-between bg-custom-gradient-2 shadow-custom-drop">
                {/* <div className="w-72 m-2">
                    <img
                        src="Anime-Almanacs-logo.png"
                        className="w-full drop-shadow-md"
                    />
                </div> */}

                <div>
                    <h2>Search</h2>
                </div>
            </nav>
            <div>{children}</div>
        </>
    );
}
