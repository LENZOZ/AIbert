import { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { UserContext } from "./context/UserContext";

import HomePage from "./pages/home/HomePage";
import AboutPage from "./pages/home/AboutPage";
import InfoPage from "./pages/home/InfoPage";
import PricePage from "./pages/home/PricePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import NotFoundPage from "./pages/NotFoundPage";
import LoginSelector from "./pages/LoginSelector";

import Home from "./pages/user/Home";
import AsignaturaPage from "./pages/user/AsignaturaPage";
import Progreso from "./pages/user/Progreso";
import ChatbotPage from "./pages/user/ChatbotPage";
import ConfiguracionPage from "./pages/user/ConfiguracionPage";
import SeccionPage from "./pages/user/SeccionPage";
import EjercicioPage from "./pages/user/EjercicioPage";

function App() {
  const { user } = useContext(UserContext);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/info" element={<InfoPage />} />
          <Route path="/price" element={<PricePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login/selector" element={<LoginSelector />} />
          {/* Ruta protegida por usuario */}
          <Route element={<ProtectedRoute isAllowed={!!user && user.rol.includes('estudiante')} redirectTo="/" />}>
            <Route
              path="/estudiante/asignaturas"
              element={<AsignaturaPage />}
            />
            <Route path="/estudiante/home" element={<Home />} />
            <Route path="/estudiante/progreso" element={<Progreso />} />
            <Route path="/estudiante/progreso/:id" element={<SeccionPage />} />
            <Route path="/estudiante/chatbot" element={<ChatbotPage />} />
            <Route path="/estudiante/configuracion" element={<ConfiguracionPage />}/>
            <Route path="/estudiante/ejercicio/:id" element={<EjercicioPage />}/>
          </Route>
          {/*---------*/}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
