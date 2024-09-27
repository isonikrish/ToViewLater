import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx"; // Ensure this matches your file name
import './index.css'
import LinkProvider from './context/LinkContext.jsx'
const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <LinkProvider>
        <App />
      </LinkProvider>

    </StrictMode>
  );
} else {
  console.error("Root element not found");
}
