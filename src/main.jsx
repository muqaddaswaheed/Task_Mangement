import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./Redux/store";
import App from "./App";
import "./index.css"; // Tailwind styles

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate  persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
