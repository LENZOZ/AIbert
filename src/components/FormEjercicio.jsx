import { Link } from "react-router-dom";
import ButtonS from "./ButtonS";
import ButtonH from "./ButtonHandle";
import { IoMdClose } from "react-icons/io";
import Overlay from "./Overlay";
import { useState, useEffect } from "react";


function EjercicioPage({ ejercicio}) {
  const [error, setError] = useState("");
  const [check, setCheck] = useState(null);
  const [estado, setEstado] = useState(false);
  const [display, setDisplay] = useState(false);

  const HandleSubmit = (e) => {
    e.preventDefault();
    if (!check) {
      setError("Por favor, selecciona al menos una opción.");
      return; // No continuar con el envío si no hay opción seleccionada
    }
    Comprobar();
    HandleDisplay();
    
    console.log("La respuesta enviada es: " + check);
  };

  const HandleCheck = (e) => {
    setCheck(e.target.value);
    setError("");
  };

  const HandleDisplay = (e) => {
    setDisplay(!display);
  };

  const Comprobar = () => {
    check == ejercicio.opcionCorrecta ? setEstado(true) : setEstado(false)
  };

  return (
    <form
      onSubmit={HandleSubmit}
      className="grid grid-cols-1 h-screen content-between"
    >
      <Overlay
        ejercicio={ejercicio}
        estado={estado}
        display={display}
        handleDisplay={HandleDisplay}
      />
      <Link className="pt-5 pl-5 w-fit h-fit" to="/estudiante/home">
        <IoMdClose size={55} className="fill-sombra-boton" />
      </Link>

      <div className="container sm:w-[80%] w-[70%] grid grid-cols-1 p-2 space-y-2 place-content-center mx-auto">
        <img
          className="mx-auto mb-8 w-[400px] h-[200px] sm:w-[500px] sm:h-[250px] object-contain"
          src={ejercicio.tokenImagen}
        />
        <h1 className="text-black text-left text-sm font-semibold font-poppins">
          {ejercicio.texto}
        </h1>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <div className="grid grid-cols-1 place-content-start">
          {ejercicio.opciones.map((opcion, i) => {
            return (
              <div
                key={i}
                className="container flex justify-start space-x-3 py-2 pl-2 hover:shadow-sm hover:bg-neutral-100 rounded-lg"
              >
                <input
                  className="my-auto accent-logo-fondo"
                  type="radio"
                  value={opcion}
                  name="aswers"
                  id={i}
                  checked={check == opcion ? true : false}
                  onChange={HandleCheck}
                />
                <h1 className="font-poppins text-sm">{opcion}</h1>
              </div>
            );
          })}
        </div>
      </div>

      <div className="space-y-4 mb-4">
        <hr />
        <div className="flex justify-between px-4">
          <div className="w-[120px] h-[45px]">
            <ButtonS title="Saltar" />
          </div>
          <ButtonH handle={HandleSubmit} title="Comprobar" />
        </div>
      </div>
    </form>
  );
}

export default EjercicioPage;
