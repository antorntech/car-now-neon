import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import "@fontsource/inter";
import "@fontsource/inter/400.css";
import "@fontsource/inter/400-italic.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>
);
