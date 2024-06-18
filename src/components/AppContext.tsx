import { createContext } from "react";
import { TitleData } from "../lib/dataTypes";

type AppContextValues = {
    input: string;
    setInput: (input: string) => void;
    searchedTitlesList: TitleData[];
    setSearchedTitlesList: (titleList: TitleData[]) => void;
};

export const AppContext = createContext<AppContextValues>({
    input: "",
    setInput: () => {},
    searchedTitlesList: [],
    setSearchedTitlesList: () => {},
});
