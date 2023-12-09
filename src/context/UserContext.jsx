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

  const [ejercicio, setEjercicios] = useState(
    {
      id: "1",
      texto: "Un vehículo con 8 litros de bencina recorre 144km a velocidad constante. ¿Cuántos kms podrá recorrer con solo 5 litros de bencina a igual velocidad?",
      tokenImagen: "https://unsplash.it/602/400",
      opciones: ["180 km","90 km","145 km","160 km"],
      opcionCorrecta: "90 km",
      explicacion: "Para calcular la distancia que un vehículo puede recorrer con 5 litros de bencina a velocidad constante, utilizamos una regla de tres simple. La relación entre la cantidad de bencina y la distancia recorrida con 8 litros es de 18 km/litro. Por lo tanto, con 5 litros, el vehículo puede recorrer 90 kilómetros",
    },
  ); //Ejercicio

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

  const logout = () => setUser(null);

  return (
    <UserContext.Provider
      value={{
        user,
        login,
        logout,
        objetivos,
        ejercicio,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
