import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>

      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: "#ffffff",
            color: "#1F1F1F",
            border: "1px solid #DCC8B6",
            borderRadius: "16px",
            padding: "16px",
            boxShadow: "0 15px 40px rgba(0,0,0,.12)",
          },
          success: {
            iconTheme: {
              primary: "#B87333",
              secondary: "#ffffff",
            },
          },
          error: {
            iconTheme: {
              primary: "#dc2626",
              secondary: "#ffffff",
            },
          },
        }}
      />

      <App />

    </AuthProvider>
  </StrictMode>
);