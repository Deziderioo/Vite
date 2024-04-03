import React from "react";
import App from "./App.jsx";
import { Tecnologias } from "./Tecnologias.jsx";
import { Calc } from "./CalcMedia.jsx";
import "./index.css";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Tecnologias",
    element: <Tecnologias />,
  },
  {
    path: "/Media",
    element: <Calc />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
