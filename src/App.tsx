import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import { AppContext } from "./components/AppContext";
import { useState } from "react";
import TitlePage from "./pages/TitlePage";

export default function App() {
    const [filter, setFilter] = useState<"TV Shows" | "Movies" | null>(null);

    const contextValue = {
        filter,
        setFilter,
    };

    return (
        <AppContext.Provider value={contextValue}>
            <Routes>
                <Route path="/" element={<Header />}>
                    <Route index element={<HomePage />} />
                    <Route path="/title-page/:id" element={<TitlePage />} />
                </Route>
            </Routes>
        </AppContext.Provider>
    );
}
