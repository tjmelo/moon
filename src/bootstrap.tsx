import React from "react";
import { createRoot } from "react-dom/client";
import "./config/i18n";
import App from "./App";

const container = document.querySelector("#app");

if (container) {
  const root = createRoot(container); 
  root.render(<App />);
} else {
  console.error("Failed to find the app container");
}