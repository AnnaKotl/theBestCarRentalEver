import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

import App from "./App.jsx";
import { GlobalStyle } from "./styles/GlobalStyle";
import Spinner from "./components/Loading/Spinner";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate
        loading={<Spinner />}
        persistor={persistor}
      >
        <BrowserRouter basename="/theBestCarRentalEver">
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
    <GlobalStyle />
  </React.StrictMode>
);
