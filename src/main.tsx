import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const root = document.getElementById("root");
console.log("Root element found:", root);

if (root) {
  createRoot(root).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {
  console.error("FATAL: Root element not found in DOM");
}
