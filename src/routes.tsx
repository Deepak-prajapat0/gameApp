import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Loyout";
import Home from "./pages/Home";
// import GameDetailPage from "./pages/GameDetailPage";
import ErrorPage from "./Components/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <Home /> },
            // { path: 'game/:slug', element: <GameDetailPage /> }
        ]
    }
]);

export default router;