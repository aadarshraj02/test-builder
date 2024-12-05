import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import UserContext from "./context/UserContext.jsx";
import { TestProvider } from "./context/TestContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TestProvider>
      <UserContext>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </UserContext>
    </TestProvider>
  </StrictMode>
);
