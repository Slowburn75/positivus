import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // if you plan to use routing
import App from "./App";
import "./index.css"; // Tailwind CSS import

// Optional: any global context providers can go here
// import { SomeContextProvider } from "./context/SomeContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* Wrap in context providers if any */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
