import React from 'react';
import { auth, firestore } from './firebaseConfig';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

const GoogleSignIn = ({ onNewUser }) => {
  const signInWithGoogle = async (event) => {
    event.preventDefault();
    const provider = new GoogleAuthProvider();
    
    try {
      const result = await signInWithPopup(auth, provider);
      const userRef = doc(firestore, 'Usuarios', result.user.uid);
      const docSnap = await getDoc(userRef);

      if (!docSnap.exists()) {
        console.log("nuevo usuario");
        // Si es un nuevo usuario
        onNewUser(result.user); // Llama a la función de callback con la información del usuario
      } else {
        // Manejo para usuario existente
        console.log("Usuario existente. No se requiere registro adicional.");
      }
    } catch (error) {
      console.error("Error en inicio de sesión con Google:", error);
    }
  };

  return (
    <button onClick={signInWithGoogle}>Iniciar sesión con Google</button>
  );
};

export default GoogleSignIn;
