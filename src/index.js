import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-3lvkdqbc3j1pnkha.us.auth0.com"
    clientId="IEwyRzCRw5WO6vpLYk6cUKET91VPHgc3"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>
);