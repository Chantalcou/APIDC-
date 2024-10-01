import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Auth0Provider
        domain="dev-tqgfoevs4h6wlt5q.us.auth0.com"
        clientId="8KX5NG5JLM5pdOJYuYkFZTRGtOs53t2v"
        cacheLocation="localstorage"
        authorizationParams={{
          redirect_uri: `${window.location.origin}`, // Actualizado a /loguin
        }}
      >
        <App />
      </Auth0Provider>
    </Router>
  </React.StrictMode>
);
