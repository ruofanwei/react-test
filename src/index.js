import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Components/App";
import store from "./Redux/store";
import { Provider } from "react-redux";
import "bootswatch/dist/minty/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
