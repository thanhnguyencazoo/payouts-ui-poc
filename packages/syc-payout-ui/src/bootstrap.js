//mount function to start up the app
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
const mount = (el) => {
  ReactDOM.render(<App />, el);
};
//if in dev and in isolation, call mount immediately
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#dev-root");
  if (devRoot) {
    mount(devRoot);
  }
}
//if we are running through container,we should export the mount function
export { mount };
