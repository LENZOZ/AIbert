import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserContextProvider } from "./context/UserContext";

import HomePage from "./pages/home/HomePage";
import AboutPage from "./pages/home/AboutPage";
import InfoPage from "./pages/home/InfoPage";
import PricePage from "./pages/home/PricePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import NotFoundPage from "./pages/NotFoundPage";
import LoginSelector from "./pages/LoginSelector";
import ProtectedRoutes from "./components/ProtectedRoutes"; // Importa el nuevo componente

function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/info" element={<InfoPage />} />
          <Route path="/price" element={<PricePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login/selector" element={<LoginSelector />} />
          <Route path="*" element={<ProtectedRoutes />} /> {/* Rutas protegidas */}
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
