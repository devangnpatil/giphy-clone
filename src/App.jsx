import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Search from "./pages/Search";
import SingleGif from "./pages/SingleGif";
import Favorites from "./pages/Favorites";
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/:category", element: <Category /> },
      { path: "/search/:query", element: <Search /> },
      { path: "/:type/:slug", element: <SingleGif /> },
      { path: "/favorite", element: <Favorites /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
