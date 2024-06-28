import { createContext } from "react";
import { TitleData } from "../lib/dataTypes";

type AppContextValues = {
    filter: "Home" | "TV Shows" | "Movies" | "My Favorites" | null;
    setFilter: React.Dispatch<
        React.SetStateAction<
            "Home" | "Movies" | "TV Shows" | "My Favorites" | null
        >
    >;

    favoritedTitles: TitleData[];
    setFavoritedTitles: React.Dispatch<React.SetStateAction<TitleData[]>>;
    handleHeartClick: (title: TitleData) => void;
    input: string;
    setInput: React.Dispatch<React.SetStateAction<string>>;
    isSearchLoading: boolean;
    setIsSearchLoading: React.Dispatch<React.SetStateAction<boolean>>;
    searchTitles: TitleData[];
    setSearchTitles: React.Dispatch<React.SetStateAction<TitleData[]>>;
};

export const AppContext = createContext<AppContextValues>({
    filter: "Home",
    setFilter: () => {},
    favoritedTitles: [],
    setFavoritedTitles: () => {},
    handleHeartClick: () => {},
    input: "",
    setInput: () => {},
    isSearchLoading: false,
    setIsSearchLoading: () => {},
    searchTitles: [],
    setSearchTitles: () => {},
});
