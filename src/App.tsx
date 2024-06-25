import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import { AppContext } from "./components/AppContext";
import { useEffect, useState } from "react";
import TitlePage from "./pages/TitlePage";
import { TitleData } from "./lib/dataTypes";
import MyFavoritesPage from "./pages/MyFavoritesPage";

export default function App() {
    const [filter, setFilter] = useState<
        "Home" | "Movies" | "TV Shows" | "My Favorites" | null
    >("Home");
    const [favoritedTitles, setFavoritedTitles] = useState<TitleData[]>(() => {
        try {
            const savedFavorites = localStorage.getItem("favoritedTitles");
            if (savedFavorites) {
                console.log("Initializing from localStorage:", savedFavorites);
                return JSON.parse(savedFavorites);
            }
        } catch (error) {
            console.error(
                "Failed to load favorited titles from localStorage during initialization:",
                error
            );
        }
        return []; // Default to an empty array if no saved data is found
    });

    // Save favorited titles to localStorage whenever they change
    useEffect(() => {
        try {
            const favoritedTitlesJSON = JSON.stringify(favoritedTitles);
            console.log("Saving to localStorage:", favoritedTitlesJSON);
            localStorage.setItem("favoritedTitles", favoritedTitlesJSON);
        } catch (error) {
            console.error(
                "Failed to save favorited titles to localStorage:",
                error
            );
        }
    }, [favoritedTitles]);

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
