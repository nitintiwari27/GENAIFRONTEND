import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { AuthProvider } from "./context/AuthContext";
import { CategoriesProvider } from "./context/CategoriesContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <CategoriesProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CategoriesProvider>
    </AuthProvider>
  </React.StrictMode>
);
