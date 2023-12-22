import React, { useState } from 'react';
import { doc, setDoc } from 'firebase/firestore';
import { firestore } from './firebaseConfig';

const UserRegistrationForm = ({ userInfo }) => {
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

    try {
      // Guardar la información del usuario en Firestore
      await setDoc(doc(firestore, 'Usuarios', userInfo.uid), {
        ...formData,
        establecimientoID: '', // Este campo se inicializa vacío
      });
      console.log('Datos del usuario guardados con éxito');
    } catch (error) {
      console.error('Error al guardar datos del usuario:', error);
    }
  };

  return (
    <div>
      <h2>Registro de Usuario</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="rut"
          value={formData.rut}
          onChange={handleInputChange}
          placeholder="RUT"
        />
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleInputChange}
          placeholder="Nombre"
        />
        <input
          type="text"
          name="apellido"
          value={formData.apellido}
          onChange={handleInputChange}
          placeholder="Apellido"
        />
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
};

export default UserRegistrationForm;
