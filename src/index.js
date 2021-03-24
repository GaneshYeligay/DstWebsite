import React from "react";
import ReactDOM from "react-dom";
import "../src/dist/css/custom.css";
import "../src/dist/css/page_slider.css";
import Root from "./Root";
import * as serviceWorker from "./serviceWorker";
import { HashRouter } from "react-router-dom";
import { StyleRoot } from "radium";
import 'react-app-polyfill/stable';
// import "../public/plugins/pace-progress/pace";

ReactDOM.render(
  <StyleRoot>
    <HashRouter>
      <Root />
    </HashRouter>
  </StyleRoot>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
