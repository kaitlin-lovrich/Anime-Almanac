import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";

export default function App() {
    return (
        <Routes>
            <Route path="/anime-almanac/" element={<Header />}>
                <Route index element={<HomePage />} />
            </Route>
        </Routes>
    );
}
