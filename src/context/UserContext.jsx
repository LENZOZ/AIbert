import { createContext, useState } from "react";

export const UserContext = createContext();

export function UserContextProvider(props) {
  const [user, setUser] = useState(null); //usuario

  const [objetivos, setObjetivos] = useState([
    {
      objetivoID: "1",
      nombre: "Seccion 1",
      descripcion: "Adición y la sustracción de números enteros",
      url: "https://unsplash.it/602/400",
      asignaturaID: "1",
    },
    {
      objetivoID: "2",
      nombre: "Seccion 2",
      descripcion:
        "Multiplicación y la división de fracciones y de decimales positivos",
      url: "https://unsplash.it/603/400",
      asignaturaID: "1",
    },
    {
      objetivoID: "3",
      nombre: "Seccion 3",
      descripcion: "Lenguaje algebraico",
      url: "https://unsplash.it/604/400",
      asignaturaID: "1",
    },
    {
      objetivoID: "4",
      nombre: "Seccion 4",
      descripcion: "Ecuaciones primer grado",
      url: "https://unsplash.it/600/400",
      asignaturaID: "1",
    },
  ]); //objetivos

  const login = () => {
    //request done
    setUser({
      usuarioId: 1,
      nombre: "John Alejandro Diaz",
      correo: "john@gmail.com",
      hashContrasena: "1234",
      rol: ["estudiante"],
    });
  };

  const carga = () => {
    setObjetivos({
      objetivoID: "1",
      nombre: "Seccion 1",
      descripcion: "Adición y la sustracción de números enteros",
      asignaturaID: "1",
    });
  };

  const logout = () => setUser(null);

  return (
    <UserContext.Provider
      value={{
        user,
        login,
        logout,
        objetivos,
        carga,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
