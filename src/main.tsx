import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import "./input.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
{
    /* <React.StrictMode></React.StrictMode> */
}
