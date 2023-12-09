import { useState } from "react";
import { MdLightMode } from "react-icons/md";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function InfoTime({color="bg-logo-fondo"}) {
  let fecha = new Date().toLocaleDateString();
  let time = new Date().toLocaleTimeString();

  const [ctime, setTime] = useState(time);

  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setTime(time);
  };

  setInterval(UpdateTime);

  const { user } = useContext(UserContext);

  return (
    <div className={"grid grid-cols-2 w-full rounded-lg h-fit p-2 my-auto font-poppins font-bold text-sm text-white uppercase " + color}>
      <div className="space-y-1 my-auto">
        <h1>BIENVENIDO(A)!</h1>
        <h2 className="font-normal">{user.nombre}</h2>
        <h2 className="font-normal">Matematicas</h2>
      </div>
      <div className="container my-auto w-fit text-center ml-auto">
        <div className="sm:flex sm:items-center sm:justify-end">
          <h1>{fecha}</h1>
          <h1 className="text-5xl sm:ml-0  px-3">
            <MdLightMode />
          </h1>
          <h1>{ctime}</h1>
        </div>
      </div>
    </div>
  );
}

export default InfoTime;
