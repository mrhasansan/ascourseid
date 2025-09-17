import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";

import "./index.css";
import { AppRoute } from "./home";
import { Register } from "./pages/register";
import { Testimonies } from "./pages/testimonies";
import { Programs } from "./pages/programs";
import { About } from "./pages/about";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppRoute />,
    children: [
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/testimonies",
        element: <Testimonies />,
      },
      {
        path: "/programs",
        element: <Programs />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
