import InfoTime from "../../components/InfoTime";
import PSideBar from "../../components/PSideBar";

import { useParams } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";


function PalumnoPage() {
  const params = useParams();
  const { estudiantes } = useContext(UserContext);

  const estudiante = estudiantes.find((obj) => {
    return obj.estudianteID === params.id;
  });

  return (
    <div className="flex bg-fondo saturate-[110%]">
      <PSideBar />
      <div className="w-full h-full p-2 space-y-2">
        <InfoTime color="bg-docente" />
        <div
          className={
            "flex w-full rounded-lg h-fit p-2 m-auto place-content-center font-poppins font-bold text-4xl text-white uppercase bg-docente"
          }
        >
          <div className="my-auto">
            <h1>{estudiante.estudianteID}</h1>
            <p>{estudiante.nombre}</p>
            <p>{estudiante.correo}</p>
            <p>{estudiante.rut}</p>
            <p>{estudiante.ultimoacceso}</p>
            <p>{estudiante.fecharegistro}</p>
          </div>
        </div>
        <div className="relative rounded-lg overflow-auto">
          <div className="shadow-sm rounded-lg overflow-hidden">
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default PalumnoPage;
