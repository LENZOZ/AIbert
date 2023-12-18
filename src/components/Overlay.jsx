import { FaCheckCircle } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";

import ButtonH from "../components/ButtonHandle";

function Overlay({ estado, ejercicio, display, handleDisplay }) {
  return (
    <div
      className={
        "bg-opacity-50 grid-cols-1 place-content-center h-screen left-0 w-screen overflow-auto fixed top-0 " +
        (display ? "grid" : "hidden") +
        " " +
        (estado ? "bg-green-400" : "bg-red-400")
      }
    >
      <div className="bg-white h-fit w-[340px] mx-auto p-5 text-center rounded-lg">
        <div className="space-y-2">
          <div className={estado ? "grid" : "hidden"}>
            <FaCheckCircle size={55} className="mx-auto fill-green-600" />
            <h1>Esto es correcto!</h1>
          </div>
          <div className={estado ? "hidden" : "grid"}>
            <IoIosCloseCircle size={55} className="mx-auto fill-red-600" />
            <h1>Esto es incorrecto!</h1>
          </div>
          <p className="text-xs pb-4 pt-2">{ejercicio.explicacion}</p>
          <div className="w-fit mx-auto">
            <ButtonH handle={(e) => { e.preventDefault(); e.stopPropagation(); handleDisplay(); }}  title="Aceptar" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overlay;
