import React, { useState, useContext } from "react";
import { doc, setDoc, collection, getDocs } from "firebase/firestore";
import { firestore } from "./firebaseConfig";
import { useNavigate } from "react-router-dom";
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

const UserRegistrationForm = ({ userInfo }) => {
  const navigate = useNavigate();
  const { updateUser } = useContext(UserContext);

  const [formData, setFormData] = useState({
    rut: "",
    nombre: "",
    apellido: "",
    correo: userInfo.email, // Inicializa el correo con el proporcionado por Google
  });


  const [estado, setEstado] = useState("hidden");
  const [padding, setPadding] = useState("");

  const handleClick = () => {
    setEstado("");
    setPadding("pr-10");
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateRut(formData.rut)) {
      alert("RUT chileno inválido");
      return;
    }

    const fullUserData = {
      ...formData,
      establecimientoID: "", // Este campo se inicializa vacío
      correo: userInfo.email,
      uid: userInfo.uid,
      rol: "estudiante", //Se establece como estudiante
      diagnostico: false,
    };

    try {
      // Guardar la información del usuario en Firestore
      await setDoc(doc(firestore, "Usuarios", userInfo.uid), fullUserData);
      console.log("Datos del usuario guardados con éxito");

      // Actualiza el estado del usuario en UserContext
      updateUser(fullUserData);

      // Obtener los objetivos de aprendizaje y sus indicadores
      const objetivosSnap = await getDocs(
        collection(firestore, "ObjetivoAprendizaje")
      );

      for (const objetivoDoc of objetivosSnap.docs) {
        const nombreObjetivo = objetivoDoc.data().nombre;

        // Crear documento en Progreso para cada ObjetivoAprendizaje
        await setDoc(
          doc(firestore, `Usuarios/${userInfo.uid}/Progreso`, objetivoDoc.id),
          { nombre: nombreObjetivo }
        );

        // Crear documento en Diagnostico
        await setDoc(
          doc(
            firestore,
            `Usuarios/${userInfo.uid}/Diagnostico`,
            objetivoDoc.id
          ),
          { resultado: 0 }
        );

        const indicadoresSnap = await getDocs(
          collection(
            firestore,
            `ObjetivoAprendizaje/${objetivoDoc.id}/Indicadores`
          )
        );

        for (const indicadorDoc of indicadoresSnap.docs) {
          const indicadorData = {
            fallos_consecutivos: 0,
            total_aciertos: 0,
            total_intentos: 0,
          };

          // Crear documento en la subcolección Indicadores de Progreso
          await setDoc(
            doc(
              firestore,
              `Usuarios/${userInfo.uid}/Progreso/${objetivoDoc.id}/Indicadores`,
              indicadorDoc.id
            ),
            indicadorData
          );
        }
      }

      //redirige a home estudiante
      navigate("/estudiante/home");
    } catch (error) {
      console.error("Error al guardar datos del usuario:", error);
    }
  };

  return (
    <div className="flex justify-between place-content-center h-screen left-0 w-screen overflow-auto fixed top-0 bg-white">
      <div className=" mx-auto p-5 pt-20 m-3 text-center w-[350px]">
        <h2 className="py-3 font-poppins font-bold">Registro de Usuario</h2>
        <form className="space-y-3" onSubmit={handleSubmit}>
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
          <hr />
          <div className="w-full h-[50px]">
            <button
              className="container flex w-full h-[45px] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl shadow-lg hover:from-cyan-600 hover:to-blue-600"
              type="submit"
              onClick={handleClick}
            >
              {/* Solo el spinner de loading */}
              <div className={"my-auto ml-2 "+ estado}>
                <svg
                  aria-hidden="true"
                  class="w-8 h-8 text-white animate-spin dark:text-gray-600 fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
              </div>
              <h1 className={"text-white font-poppins text-sm font-semibold uppercase mx-auto my-auto " + padding}>
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
  );
};

export default UserRegistrationForm;
