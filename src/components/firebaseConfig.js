import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  //Configuraciones de Firebase
  apiKey: "AIzaSyA72lHBnxFKLAJlDwllloCo3QdS5WLI6m8", // Clave de API
  authDomain: "aibert-bc145.firebaseapp.com", // Dominio de Autenticación
  projectId: "aibert-bc145", // ID del Proyecto
  storageBucket: "aibert-bc145.appspot.com", // Bucket de Almacenamiento
  appId: "1:491017873541:web:9530040611107e4ce861ec", // ID del remitente de mensajes
  measurementId: "G-L81HGFBKH3", // App ID
  // Añadir cualquier otro detalle de configuración necesario
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

// Inicializa Firestore
const firestore = getFirestore(app);
const auth = getAuth(app);

export { app, auth, firestore, analytics };