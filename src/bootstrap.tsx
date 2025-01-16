import React from "react";
import { createRoot } from "react-dom/client";
import "./config/i18n";
import App from "./App";

export const container = document.querySelector("#app");

if (container) {
  const shadowRoot = container.attachShadow({ mode: "open" });

  const event = new CustomEvent("shadowroot-created");
  container.dispatchEvent(event);

  const shadowContainer = document.createElement("div");
  shadowRoot.appendChild(shadowContainer);

  const root = createRoot(shadowContainer);
  root.render(<App />);
} else {
  console.error("Failed to find the app container");
}
