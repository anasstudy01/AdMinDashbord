import { createBrowserRouter } from "react-router";
import LoginPage from "./Pages/LoginPage";
import HomePage from "./Pages/HomePage";

export const router = createBrowserRouter([
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
        path: "/home",
        element: <HomePage />,
    },
]);
