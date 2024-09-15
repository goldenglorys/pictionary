import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import RootLayout from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RootLayout />
  </StrictMode>
);
