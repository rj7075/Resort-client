import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { BrowserRouter } from "react-router-dom";
import { Store, persistor } from "./Redux/Store.js";
import { Provider } from "react-redux";

import { PersistGate } from "redux-persist/integration/react";
import { AppProvider } from "./Context/useAppContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={Store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppProvider>
          <App />
        </AppProvider>
      </PersistGate>
    </Provider>
  </BrowserRouter>
);
