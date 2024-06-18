import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import { TitleData } from "./lib/dataTypes";
import { useState } from "react";
import { AppContext } from "./components/AppContext";

export default function App() {
    const [input, setInput] = useState("");
    const [searchedTitlesList, setSearchedTitlesList] = useState<TitleData[]>(
        []
    );

    const contextValue = {
        input,
        setInput,
        searchedTitlesList,
        setSearchedTitlesList,
    };

    return (
        <AppContext.Provider value={contextValue}>
            <Routes>
                <Route path="/" element={<Header />}>
                    <Route index element={<HomePage />} />
                </Route>
            </Routes>
        </AppContext.Provider>
    );
}
