import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { loadConfig } from "../config.js";
import { GlobalProvider } from "./context/contextGlobal";

const initializeApp = async () => {
  try {
    await loadConfig();
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
      <React.StrictMode>
        <GlobalProvider>
            <App />
        </GlobalProvider>
      </React.StrictMode>
    );
  } catch (error) {
    console.error("Lỗi khi load config:", error);
  }
};

initializeApp();
reportWebVitals();

