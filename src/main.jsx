import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout";
import EstadosGlobalesProvider from "./Components/utils/DentistContext";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <BrowserRouter>
    <EstadosGlobalesProvider>
      <MainLayout />
    </EstadosGlobalesProvider>
  </BrowserRouter>
  // </React.StrictMode>
);
