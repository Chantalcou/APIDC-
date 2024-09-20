import React from "react";
import ReactDOM from "react-dom/client";
// import "./assets/css/bootstrap.min.css"; // Asegúrate de que la ruta sea correcta
// import "./assets/css/custom.css"; // Asegúrate de que la ruta sea correcta
// import "@fortawesome/fontawesome-free/css/all.min.css"; // Asegúrate de que la ruta sea correcta
import App from "./index.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
