import React, { useContext } from 'react';
import { auth, firestore } from './firebaseConfig';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext'; // Importa UserContext

const GoogleSignIn = ({onNewUser}) => {
  const navigate = useNavigate();
  const { updateUser } = useContext(UserContext); // Utiliza la función de UserContext para actualizar el usuario

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
        // Llama a la función de callback con la información del usuario
        onNewUser(result.user); 
      } else {
        console.log("Usuario existente. No se requiere registro adicional.");
        // Usuario existente, actualizar el estado del usuario en UserContext
        updateUser({ ...docSnap.data(), usuarioId: result.user.uid });
        // Redirige al home del estudiante
        navigate('/estudiante/home');
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
