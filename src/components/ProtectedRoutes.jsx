import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { ProtectedRoute } from "./ProtectedRoute";

// Importa tus componentes de página aquí
import Home from "../pages/user/Home";
import AsignaturaPage from "../pages/user/AsignaturaPage";
import Progreso from "../pages/user/Progreso";
import ChatbotPage from "../pages/user/ChatbotPage";
import ConfiguracionPage from "../pages/user/ConfiguracionPage";
import SeccionPage from "../pages/user/SeccionPage";
import EjercicioPage from "../pages/user/EjercicioPage";
import PhomePage from "../pages/teacher/PhomePage";
import PasignaturaPage from "../pages/teacher/PasignaturasPage";
import PcursoPage from "../pages/teacher/PcursoPage";
import PalumnoPage from "../pages/teacher/PalumnoPage";
import PconfiguracionPage from "../pages/teacher/PconfiguracionPage";

const ProtectedRoutes = () => {
  const { user } = useContext(UserContext);

  return (
    <Routes>
      {/* Rutas protegidas para estudiantes */}
      <Route element={<ProtectedRoute isAllowed={!!user && user.rol.includes('estudiante')} redirectTo="/login" />}>
        <Route path="/estudiante/asignaturas" element={<AsignaturaPage />} />
        <Route path="/estudiante/home" element={<Home />} />
        <Route path="/estudiante/progreso" element={<Progreso />} />
        <Route path="/estudiante/progreso/:id" element={<SeccionPage />} />
        <Route path="/estudiante/chatbot" element={<ChatbotPage />} />
        <Route path="/estudiante/configuracion" element={<ConfiguracionPage />} />
        <Route path="/estudiante/ejercicio/:id" element={<EjercicioPage />} />
      </Route>

      {/* Rutas protegidas para profesores */}
      <Route element={<ProtectedRoute isAllowed={!!user && user.rol.includes('profesor')} redirectTo="/login" />}>
        <Route path="/profesor/asignaturas" element={<PasignaturaPage />} />
        <Route path="/profesor/home" element={<PhomePage />} />
        <Route path="/profesor/configuracion" element={<PconfiguracionPage />} />
        <Route path="/profesor/curso/:id" element={<PcursoPage />} />
        <Route path="/profesor/curso/alumno/:id" element={<PalumnoPage />} />
      </Route>
    </Routes>
  );
};

export default ProtectedRoutes;
