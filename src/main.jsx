import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Result from "./pages/Result.jsx";
import Search from "./pages/Search.jsx";
import MovieDetail from "./pages/MovieDetail.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Search />,
  },
  {
    path: "result",
    element: <Result />,
  },
  {
    path: "/moviedetail",
    element: <MovieDetail />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
