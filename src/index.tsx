import React from "react";
import { render } from "react-dom";
import "./config/i18n";
import App from "./App";

export const Root = () => <App />;

render(<Root />, document.querySelector("#app"));
