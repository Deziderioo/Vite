import React from "react";
import App from "./App.jsx";
import { Tecnologias } from "./Tecnologias.jsx";
import { Calc } from "./CalcMedia.jsx";
import { Contact } from "./Map.jsx";
import "./index.css";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RickAndMorty } from './RickAPI.jsx'

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
  {
    path: "/Cont",
    element: <Contact />,
  },
  {
    path: "/Rick",
    element: <RickAndMorty/>,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
