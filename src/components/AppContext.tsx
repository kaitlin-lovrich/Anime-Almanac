import { createContext } from "react";

type AppContextValues = {
    filter: 'TV Shows' | 'Movies' | null;
    setFilter: React.Dispatch<React.SetStateAction<'TV Shows' | 'Movies' | null>>;
};

export const AppContext = createContext<AppContextValues>({
    filter: null,
    setFilter: () => {},
});
