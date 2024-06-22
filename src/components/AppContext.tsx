import { createContext } from "react";

type AppContextValues = {
    filter: "Home" | "TV Shows" | "Movies" | null;
    setFilter: React.Dispatch<
        React.SetStateAction<"Home" | "Movies" | "TV Shows" | null>
    >;
};

export const AppContext = createContext<AppContextValues>({
    filter: "Home",
    setFilter: () => {},
});
