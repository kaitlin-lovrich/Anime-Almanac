import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import { AppContext } from "./components/AppContext";
import { useState } from "react";
import TitlePage from "./pages/TitlePage";
import { TitleData } from "./lib/dataTypes";
import MyFavoritesPage from "./pages/MyFavoritesPage";

export default function App() {
    const [filter, setFilter] = useState<
        "Home" | "Movies" | "TV Shows" | "My Favorites" | null
    >("Home");
    const [favoritedTitles, setFavoritedTitles] = useState<TitleData[]>([]);

    const contextValue = {
        filter,
        setFilter,
        favoritedTitles,
        setFavoritedTitles,
    };

    return (
        <AppContext.Provider value={contextValue}>
            <Routes>
                <Route path="/" element={<Header />}>
                    <Route index element={<HomePage />} />
                    <Route path="/title-page/:id" element={<TitlePage />} />
                    <Route path="/my-favorites" element={<MyFavoritesPage />} />
                </Route>
            </Routes>
        </AppContext.Provider>
    );
}
