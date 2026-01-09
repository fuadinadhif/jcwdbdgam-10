import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.tsx";
import { BrowserRouter, Routes, Route } from "react-router";
import Single from "./pages/SinglePage.tsx";
import ContextPage from "./pages/ContextPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/single" element={<Single />} />
        <Route path="/context" element={<ContextPage />} />
        {/* <Route path="/zustand" /> */}
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
