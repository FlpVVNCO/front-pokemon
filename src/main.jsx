import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { PokeProvider } from "./context/PokeContext.jsx";
import { NextUIProvider } from "@nextui-org/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PokeProvider>
      <NextUIProvider>
        <App />
      </NextUIProvider>
    </PokeProvider>
  </React.StrictMode>
);
