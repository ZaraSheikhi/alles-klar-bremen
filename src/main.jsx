import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App";
import "@fontsource-variable/fredoka";
import "@fontsource-variable/inter";
import "./index.css";

const container = document.getElementById("root");
const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Vorab gerenderte Seiten übernehmen (hydrate), sonst normal rendern (Dev-Server, 404-Weiterleitung)
if (container.hasChildNodes()) hydrateRoot(container, app);
else createRoot(container).render(app);
