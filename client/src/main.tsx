import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App";
import { ThemeProvider } from "./context/ThemeContext";
import { AppRoutes } from "./app/AppRoutes";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <AppRoutes />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
