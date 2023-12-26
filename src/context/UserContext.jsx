import React, { createContext, useState, useEffect } from "react";
import { auth, firestore } from "../components/firebaseConfig";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc, collection, getDocs} from "firebase/firestore";

export const UserContext = createContext();

export function UserContextProvider(props) {
  const [user, setUser] = useState(null);
  const [objetivos, setObjetivos] = useState([]);
  
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

      // Consulta a Firestore para obtener información adicional del usuario
      const userDocRef = doc(firestore, "Usuarios", uid);
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
        const userData = {
          uid, // incluye el UID
          ...userDoc.data(), // Toda la información adicional del usuario
        };

        // Actualiza el estado del usuario con los datos de Firestore
        setUser(userData);
      } else {
        console.error("No se encontraron datos del usuario en Firestore");
      }
    } catch (error) {
      console.error("Error en el inicio de sesión:", error);
      throw error;
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

  return (
    <UserContext.Provider
      value={{
        user,
        objetivos,
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
