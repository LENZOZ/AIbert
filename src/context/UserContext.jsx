import React, { createContext, useState, useEffect } from "react";
import { auth } from "../components/firebaseConfig"; // Asegúrate de que esta es la ruta correcta
import { onAuthStateChanged } from "firebase/auth";

export const UserContext = createContext();

export function UserContextProvider(props) {
  const [user, setUser] = useState(null);
  const logout = () => setUser(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        // Usuario ha iniciado sesión o se acaba de registrar
        setUser(firebaseUser);
      } else {
        // Usuario no ha iniciado sesión o se ha desconectado
        setUser(null);
      }
    });

    return () => unsubscribe(); // Limpieza al desmontar
  }, []);

  // Otras variables de estado y funciones aquí (profesor, estudiantes, etc.)
  // ...

  return (
    <UserContext.Provider
      value={{
        user,
        logout,
        // Incluye aquí otras variables de estado y funciones
        // ...
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
