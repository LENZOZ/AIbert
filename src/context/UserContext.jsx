import { createContext, useState } from "react";

export const UserContext = createContext();

export function UserContextProvider(props) {
  const [user, setUser] = useState(null); //usuario

  const [profesor, setProfesor] = useState(
    {
      profesorID: "2",
      nombre: "John Alejandro Diaz",
      correo: "john@gmail.com",
      asignaturas: ["matematicas"],
      cursoID: ["Synergy","Dinámico","Fusiona","Cohesión"]
    }
  ); //profesor

  const [estudiantes, setEstudiantes] = useState(
    [{
      estudianteID: "1",   
      nombre: "Carlos",
      correo: "carlos@gmail.com",
      rut: "12.345.678-9",
      ultimoacceso: "01/01/2023",
      fecharegistro: "02/02/2002",
    },
    {
      estudianteID: "2",
      nombre: "Ana",
      correo: "ana@gmail.com",
      rut: "98.765.432-1",
      ultimoacceso: "03/03/2023",
      fecharegistro: "04/04/2004",
    },
    {
      estudianteID: "3",
      nombre: "Luis",
      correo: "luis@gmail.com",
      rut: "11.223.344-5",
      ultimoacceso: "05/05/2023",
      fecharegistro: "06/06/2006",
    },
    {
      estudianteID: "4",
      nombre: "María",
      correo: "maria@gmail.com",
      rut: "99.888.777-6",
      ultimoacceso: "07/07/2023",
      fecharegistro: "08/08/2008",
    },
    {
      estudianteID: "5",
      nombre: "Diego",
      correo: "diego@gmail.com",
      rut: "44.555.666-7",
      ultimoacceso: "09/09/2023",
      fecharegistro: "10/10/2010",
    },
    {
      estudianteID: "6",
      nombre: "Laura",
      correo: "laura@gmail.com",
      rut: "33.222.111-8",
      ultimoacceso: "11/11/2023",
      fecharegistro: "12/12/2012",
    },
    {
      estudianteID: "7",
      nombre: "Javier",
      correo: "javier@gmail.com",
      rut: "77.666.555-4",
      ultimoacceso: "01/01/2024",
      fecharegistro: "02/02/2003",
    },
    {
      estudianteID: "8",
      nombre: "Isabel",
      correo: "isabel@gmail.com",
      rut: "55.444.333-2",
      ultimoacceso: "03/03/2024",
      fecharegistro: "04/04/2005",
    },
    {
      estudianteID: "9",
      nombre: "Sara",
      correo: "sara@gmail.com",
      rut: "22.999.888-3",
      ultimoacceso: "05/05/2024",
      fecharegistro: "06/06/2007",
    },
    {
      estudianteID: "10",
      nombre: "Pedro",
      correo: "pedro@gmail.com",
      rut: "66.777.888-0",
      ultimoacceso: "07/07/2024",
      fecharegistro: "08/08/2009",
    },
  ]); //estudiantes


  const [objetivos, setObjetivos] = useState([ //Objetivos
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

  const [cursos, setCursos] = useState([
    {
      cursoID: "1",
      nombre: "Synergy",
      nivel: "7°grado",
      establecimientoID: "1012",
      alumnos: ["1","2","3","4","5","6","7","8","9","10"],
      asignaturas: ["matematicas", "lenguaje"]
    },{
      cursoID: "2",
      nombre: "Dinámico",
      nivel: "8°grado",
      establecimientoID: "1012",
      alumnos: ["Carlos", "Ana", "Luis", "María", "Diego", "Laura", "Javier", "Isabel", "Sara", "Pedro"],
      asignaturas: ["matematicas", "lenguaje"]
    },{
      cursoID: "3",
      nombre: "Fusiona",
      nivel: "8°grado",
      establecimientoID: "1012",
      alumnos: ["Carlos", "Ana", "Luis", "María", "Diego", "Laura", "Javier", "Isabel", "Sara", "Pedro"],
      asignaturas: ["matematicas", "lenguaje"]
    },{
      cursoID: "4",
      nombre: "Cohesión",
      nivel: "1°medio",
      establecimientoID: "1012",
      alumnos: ["Carlos", "Ana", "Luis", "María", "Diego", "Laura", "Javier", "Isabel", "Sara", "Pedro"],
      asignaturas: ["matematicas", "lenguaje"]
    },
  ]); //Cursos (estan solo cargados en local, desconozco como se van a mandar desde la bd)



  const login = () => {
    //request done
    setUser({
      usuarioId: 1,
      nombre: "John Alejandro Diaz",
      correo: "john@gmail.com",
      hashContrasena: "1234",
      rol: ["estudiante", "profesor"],
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
        profesor,
        cursos,
        estudiantes,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
