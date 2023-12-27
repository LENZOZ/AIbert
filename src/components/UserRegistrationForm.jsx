import React, { useState, useContext } from 'react';
import { doc, setDoc, collection, getDocs } from 'firebase/firestore';
import { firestore } from './firebaseConfig';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext'; // Importa UserContext

function validateRut(rut) {
  // Limpiar el RUT dejando solo números y el dígito verificador
  const cleanRut = rut.replace(/[^0-9kK]/g, '');

  // Separar el cuerpo del dígito verificador
  const cuerpo = cleanRut.slice(0, -1);
  let dv = cleanRut.slice(-1).toUpperCase();

  // Calcular dígito verificador
  let suma = 0;
  let multiplo = 2;

  // Recorrer de atrás para adelante
  for (let i = 1; i <= cuerpo.length; i++) {
    const index = multiplo * cleanRut.charAt(cuerpo.length - i);
    suma = suma + index;
    if (multiplo < 7) {
      multiplo = multiplo + 1;
    } else {
      multiplo = 2;
    }
  }

  // Calcular dígito verificador
  const dvEsperado = 11 - (suma % 11);
  dv = (dv === 'K') ? 10 : dv;
  dv = (dv === '0') ? 11 : dv;

  // Comparar el dígito verificador
  return dvEsperado.toString() === dv.toString();
}

const UserRegistrationForm = ({ userInfo }) => {
  const navigate = useNavigate();
  const { updateUser } = useContext(UserContext); 

  const [formData, setFormData] = useState({
    rut: '',
    nombre: '',
    apellido: '',
    correo: userInfo.email, // Inicializa el correo con el proporcionado por Google
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateRut(formData.rut)) {
      alert('RUT chileno inválido');
      return;
    }

    const fullUserData = {
      ...formData,
      establecimientoID: '', // Este campo se inicializa vacío
      correo: userInfo.email,
      uid: userInfo.uid,
      rol: 'estudiante', //Se establece como estudiante
      diagnostico:false,
    };

    try {
      // Guardar la información del usuario en Firestore
      await setDoc(doc(firestore, 'Usuarios', userInfo.uid), fullUserData);
      console.log('Datos del usuario guardados con éxito');

      // Actualiza el estado del usuario en UserContext
      updateUser(fullUserData);

     // Obtener los objetivos de aprendizaje y sus indicadores
    const objetivosSnap = await getDocs(collection(firestore, "ObjetivoAprendizaje"));
    
    for (const objetivoDoc of objetivosSnap.docs) {
      const nombreObjetivo = objetivoDoc.data().nombre;

      // Crear documento en Progreso para cada ObjetivoAprendizaje
      await setDoc(doc(firestore, `Usuarios/${userInfo.uid}/Progreso`, objetivoDoc.id), { nombre: nombreObjetivo });

      // Crear documento en Diagnostico
      await setDoc(doc(firestore, `Usuarios/${userInfo.uid}/Diagnostico`, objetivoDoc.id), { resultado: 0 });

      const indicadoresSnap = await getDocs(collection(firestore, `ObjetivoAprendizaje/${objetivoDoc.id}/Indicadores`));
      
      for (const indicadorDoc of indicadoresSnap.docs) {
        const indicadorData = {
          fallos_consecutivos: 0,
          total_aciertos: 0,
          total_intentos: 0
        };

        // Crear documento en la subcolección Indicadores de Progreso
        await setDoc(doc(firestore, `Usuarios/${userInfo.uid}/Progreso/${objetivoDoc.id}/Indicadores`, indicadorDoc.id), indicadorData);
      }
    }

      //redirige a home estudiante
      navigate('/estudiante/home');
    } catch (error) {
      console.error('Error al guardar datos del usuario:', error);
    }
  };

  return (
    <div className="border-solid p-5 m-3 text-center w-[350px] bg-white inline-block">
      <h2 className="py-3 font-poppins font-bold">Registro de Usuario</h2>
      <form className="space-y-3" onSubmit={handleSubmit}>
        <input
          className="w-full h-[50px] bg-neutral-200 rounded-lg pl-4"
          type="text"
          name="rut"
          value={formData.rut}
          onChange={handleInputChange}
          placeholder="RUT"
        />
        <input
          className="w-full h-[50px] bg-neutral-200 rounded-lg pl-4"
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleInputChange}
          placeholder="Nombre"
        />
        <input
          className="w-full h-[50px] bg-neutral-200 rounded-lg pl-4"
          type="text"
          name="apellido"
          value={formData.apellido}
          onChange={handleInputChange}
          placeholder="Apellido"
        />
        <div className="w-full h-[50px]">
          <button className="w-full h-full bg-logo-fondo text-white rounded-lg" type="submit">Guardar</button>
        </div>
      </form>
    </div>
  );
};

export default UserRegistrationForm;
