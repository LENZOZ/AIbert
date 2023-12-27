import React, { useState, useContext } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, firestore } from "./firebaseConfig";
import { doc, setDoc, collection, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext"; // Importa UserContext

function validateRut(rut) {
  // Limpiar el RUT dejando solo números y el dígito verificador
  const cleanRut = rut.replace(/[^0-9kK]/g, "");

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
  dv = dv === "K" ? 10 : dv;
  dv = dv === "0" ? 11 : dv;

  // Comparar el dígito verificador
  return dvEsperado.toString() === dv.toString();
}

const EmailRegistrationForm = () => {
  const [formData, setFormData] = useState({
    correo: "",
    password: "",
    confirmPassword: "",
    nombre: "",
    apellido: "",
    rut: "",
  });
  const navigate = useNavigate();
  const { updateUser } = useContext(UserContext); // Utiliza la función de UserContext para actualizar el usuario

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { correo, password, confirmPassword, nombre, apellido, rut } =
      formData;

    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    if (!validateRut(rut)) {
      alert("RUT chileno inválido");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        correo,
        password
      );
      const uid = userCredential.user.uid;
      const userData = {
        nombre,
        apellido,
        rut,
        correo,
        rol: "estudiante",
        uid,
        diagnostico: false,
        establecimientoID: "",
      };

      await setDoc(doc(firestore, "Usuarios", uid), userData);

      // Actualizar el UserContext con la información del usuario
      updateUser(userData);

      // Obtener los objetivos de aprendizaje y sus indicadores
      const objetivosSnap = await getDocs(
        collection(firestore, "ObjetivoAprendizaje")
      );

      for (const objetivoDoc of objetivosSnap.docs) {
        const nombreObjetivo = objetivoDoc.data().nombre;
        // Crear documento en Progreso
        await setDoc(
          doc(firestore, `Usuarios/${uid}/Progreso`, objetivoDoc.id),
          { nombre: nombreObjetivo }
        );

        // Crear documento en Diagnostico
        await setDoc(
          doc(firestore, `Usuarios/${uid}/Diagnostico`, objetivoDoc.id),
          { resultado: 0 }
        );

        const indicadoresSnap = await getDocs(
          collection(
            firestore,
            `ObjetivoAprendizaje/${objetivoDoc.id}/Indicadores`
          )
        );

        for (const indicadorDoc of indicadoresSnap.docs) {
          const progresoData = {
            nombre: indicadorDoc.data().nombre,
            fallos_consecutivos: 0,
            total_aciertos: 0,
            total_intentos: 0,
          };

          await setDoc(
            doc(
              firestore,
              `Usuarios/${uid}/Progreso/${objetivoDoc.id}/Indicadores`,
              indicadorDoc.id
            ),
            progresoData
          );
        }
      }

      navigate("/estudiante/home");
    } catch (error) {
      console.error("Error en el registro:", error);
      alert("Error en el registro: " + error.message);
    }
  };

  return (
    <div className="h-screen w-screen">
      <div className=" flex justify-between px-10 pt-6">
        <Link to="/login">
          <FaArrowLeft size={45} className="fill-sombra-boton" />
        </Link>
      </div>
      <div className="flex justify-center">
        <div className="border-solid p-5 m-3 text-center w-[350px] bg-white inline-block">
          <h2 className="py-3 font-poppins font-bold">Registro de Usuario</h2>
          <form className="space-y-3" onSubmit={handleSubmit}>
            <input
              className="w-full h-[50px] bg-neutral-200 rounded-lg pl-4 hover:bg-neutral-300"
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleInputChange}
              placeholder="Nombre"
            />
            <input
              className="w-full h-[50px] bg-neutral-200 rounded-lg pl-4 hover:bg-neutral-300"
              type="text"
              name="apellido"
              value={formData.apellido}
              onChange={handleInputChange}
              placeholder="Apellido"
            />
            <input
              className="w-full h-[50px] bg-neutral-200 rounded-lg pl-4 hover:bg-neutral-300"
              type="text"
              name="rut"
              value={formData.rut}
              onChange={handleInputChange}
              placeholder="RUT"
            />
            <input
              className="w-full h-[50px] bg-neutral-200 rounded-lg pl-4 hover:bg-neutral-300"
              type="email"
              name="correo"
              value={formData.correo}
              onChange={handleInputChange}
              placeholder="Correo Electrónico"
            />
            <input
              className="w-full h-[50px] bg-neutral-200 rounded-lg pl-4 hover:bg-neutral-300"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Contraseña"
            />
            <input
              className="w-full h-[50px] bg-neutral-200 rounded-lg pl-4 hover:bg-neutral-300"
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              placeholder="Confirmar Contraseña"
            />
            <hr />
            <div className="w-full h-[50px]">
              <button
                className="container flex w-full h-[45px] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl shadow-lg hover:from-cyan-600 hover:to-blue-600"
                type="submit"
              >
                <h1 className="text-white font-poppins text-sm font-semibold uppercase mx-auto my-auto">
                  Registrar
                </h1>
              </button>
            </div>
            <p className="font-poppins font-light text-gray-400 text-[10px]">
              Al registrarte en AIBert, aceptas nuestros Términos y Políticas de
              privacidad.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmailRegistrationForm;
