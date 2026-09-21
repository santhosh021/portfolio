import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource/itim/400.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "./index.css";
import App from "./App";

// Lets the CSS hide "reveal" elements only when scripts are running.
document.documentElement.classList.add("js");

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
