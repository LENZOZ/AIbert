import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  //Configuraciones de Firebase
  apiKey: "AIzaSyA72lHBnxFKLAJlDwllloCo3QdS5WLI6m8", // Clave de API
  authDomain: "aibert-bc145.firebaseapp.com", // Dominio de Autenticación
  projectId: "aibert-bc145", // ID del Proyecto
  storageBucket: "aibert-bc145.appspot.com", // Bucket de Almacenamiento
  messagingSenderId: "491017873541", // ID del remitente de mensajes
  appId: "1:491017873541:web:tu-app-id", // App ID
  // Añadir cualquier otro detalle de configuración necesario
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Inicializa Firestore
const firestore = getFirestore(app);
const auth = getAuth(app);

export { app, auth, firestore };