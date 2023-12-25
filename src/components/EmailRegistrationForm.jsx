import React, { useState, useContext } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, firestore } from './firebaseConfig';
import { doc, setDoc } from 'firebase/firestore';
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
  

  const EmailRegistrationForm = () => {
    const [formData, setFormData] = useState({
      correo: '',
      password: '',
      confirmPassword: '',
      nombre: '',
      apellido: '',
      rut: '',
    });
    const navigate = useNavigate();
    const { updateUser } = useContext(UserContext); // Utiliza la función de UserContext para actualizar el usuario
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      const { correo, password, confirmPassword, nombre, apellido, rut } = formData;
  
      if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden');
        return;
      }
  
      if (!validateRut(rut)) {
        alert('RUT chileno inválido');
        return;
      }
  
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, correo, password);
        const uid = userCredential.user.uid;
        const userData = {
          nombre,
          apellido,
          rut,
          correo,
          rol: 'estudiante',
          uid
        };
  
        await setDoc(doc(firestore, 'Usuarios', uid), userData);

        // Actualizar el UserContext con la información del usuario
        updateUser(userData);
  
        navigate('/estudiante/home');
      } catch (error) {
        console.error('Error en el registro:', error);
        alert('Error en el registro: ' + error.message);
      }
    };
  
    return (
      <div className="border-solid p-5 m-3 text-center w-[350px] bg-white inline-block">
        <h2 className="py-3 font-poppins font-bold">Registro de Usuario</h2>
        <form className="space-y-3" onSubmit={handleSubmit}>
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
            type="email"
            name="correo"
            value={formData.correo}
            onChange={handleInputChange}
            placeholder="Correo Electrónico"
          />
          <input
            className="w-full h-[50px] bg-neutral-200 rounded-lg pl-4"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Contraseña"
          />
          <input
            className="w-full h-[50px] bg-neutral-200 rounded-lg pl-4"
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            placeholder="Confirmar Contraseña"
          />
          <div className="w-full h-[50px]">
            <button className="w-full h-full bg-logo-fondo text-white rounded-lg" type="submit">Registrar</button>
          </div>
        </form>
      </div>
    );
  };
  
  export default EmailRegistrationForm;