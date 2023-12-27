import React, { createContext, useState, useEffect } from "react";
import { auth, firestore } from "../components/firebaseConfig";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc, collection, getDocs, query, where} from "firebase/firestore";

export const UserContext = createContext();

export function UserContextProvider(props) {
  const [user, setUser] = useState(null);
  const [objetivos, setObjetivos] = useState([]);
  const [cursos, setCursos] = useState([]);
  const [openai, setOpenai] = useState("");

  // Función para obtener clave de openai
  const obtenerOpenai = async () => {
    try {
      const openaiColRef = collection(firestore, "Openai");
      const snapshot = await getDocs(openaiColRef);
      const openaiTemp = [];

      for (const doc of snapshot.docs) {
        const data = doc.data();
        const subcolecciones = {};

        openaiTemp.push({id: doc.id, ...data, subcolecciones });
      }
      setOpenai(openaiTemp);
    } catch (error) {
      console.log("Error al obtener clave de openai:". error);
    }
  };

  
  // Función para obtener objetivos de aprendizaje
  const obtenerObjetivos = async () => {
    try {
      const objetivosColRef = collection(firestore, "ObjetivoAprendizaje");
      const snapshot = await getDocs(objetivosColRef);
      const objetivosTemp = [];
      
      for (const doc of snapshot.docs) {
        const data = doc.data();
        const subcolecciones = {}; // Aquí se almacenan las subcolecciones

        // Aquí se agrega la lógica para obtener subcolecciones si es necesario
        // ...

        objetivosTemp.push({ id: doc.id, ...data, subcolecciones });
      }

      setObjetivos(objetivosTemp);
    } catch (error) {
      console.error("Error al obtener objetivos:", error);
    }
  };

  const login = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const uid = userCredential.user.uid;
      const userDocRef = doc(firestore, "Usuarios", uid);
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
        console.log("usuario cargado")
        setUser({ uid, ...userDoc.data() });
      } else {
        console.error("No se encontraron datos del usuario en Firestore");
      }
    } catch (error) {
      console.error("Error en el inicio de sesión:", error);
      throw error;
    }
  };

  const cargarCursosProfesor = async (uid) => {
    try {
      const cursosColRef = collection(firestore, `Usuarios/${uid}/Cursos`);
      const snapshot = await getDocs(cursosColRef);
      const cursosTemp = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setCursos(cursosTemp); // Actualiza el estado de cursos
      console.log("cursos cargados")
    } catch (error) {
      console.error("Error al obtener cursos:", error);
    }
  };
  

  const logout = async () => {
    try {
      await auth.signOut();
      setUser(null);
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  const updateUser = (newUser) => {
    setUser(newUser);
  };

  useEffect(() => {
    obtenerOpenai();
    obtenerObjetivos(); // Obtener objetivos al iniciar el contexto
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser);
      } else {
        setUser(null);
      }

    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (user && user.rol === "profesor") {
      cargarCursosProfesor(user.uid);
    }
  }, [user]);

  return (
    <UserContext.Provider
      value={{
        user,
        objetivos,
        cursos,
        openai,
        login,
        logout,
        updateUser,
        // Otras variables de estado y funciones aquí...
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
