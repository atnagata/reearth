// import "./wdyr"; // should be the first import

import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";

import App from "./app";
import { initialize as initializeSentry } from "./sentry";
import loadConfig from "./services/config";
import wdyr from "./wdyr";

window.React = React;
window.ReactDOM = ReactDOM;

loadConfig().finally(async () => {
  await import("./services/config/aws.config");
  const element = document.getElementById("root");
  if (!element) throw new Error("root element is not found");

  initializeSentry();
  if (import.meta.env.DEV) await wdyr();

  const root = createRoot(element);
  root.render(<App />);
});
