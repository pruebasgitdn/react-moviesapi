import React from "react";
import ReactDOM from "react-dom/client";
import { BuscadorComponent } from "./buscadorPeliculas";
import "./styles/buscador.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BuscadorComponent />
  </React.StrictMode>
);
