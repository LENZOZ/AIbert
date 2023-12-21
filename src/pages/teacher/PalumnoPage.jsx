import InfoTime from "../../components/InfoTime";
import PSideBar from "../../components/PSideBar";

import { useParams } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import BarTitle from "../../components/BarTitle";
import GraphicBar from "../../components/GraphicBar";
import GraphicArea from "../../components/GraphicArea";

function PalumnoPage() {
  const params = useParams(); //Recupero el id mandado por el link con params
  const { estudiantes } = useContext(UserContext); //Recupero la lista de estudiantes del curso por el contexto

  const estudiante = estudiantes.find((obj) => {
    //busco el estudiante asociado al id y lo recurpero
    return obj.estudianteID === params.id;
  });

  return (
    <div className="flex bg-fondo saturate-[110%]">
      <PSideBar />
      <div className="w-full h-full p-2 space-y-2">
        <InfoTime color="bg-docente" />
        <BarTitle to="/profesor/home" title="Alumno" />
        <div
          className={
            "grid grid-cols-1 w-full rounded-lg h-fit m-auto place-content-center font-poppins bg-docente"
          }
        >
          <div className="my-auto">
            <h1 className="font-bold text-sm text-white pl-3 p-2">Detalles de usuario</h1>
          </div>
          <div className="bg-white text-black font-normal text-sm space-y-2 pl-3">
            <p className="text-lg font-bold pt-2">{estudiante.nombre}</p>
            <p className="font-bold">Dirección de correo</p>
            <p>{estudiante.correo}</p>
            <p className="font-bold">Última conexion</p>
            <p>{estudiante.ultimoacceso}</p>
            <p className="font-bold">Asignatura</p>
            <p>Matemáticas</p>
            <p className="font-bold">Fecha de registro</p>
            <p>{estudiante.fecharegistro}</p>
            <p className="font-bold">Objetivo de aprendizaje actual</p>
            <p className="pb-6">Falta averiguar de donde obtenerlo</p>
            {/* <p className="font-bold">Progreso (Grafico)</p> */}

            <GraphicBar />
            <GraphicArea />
          </div>
        </div>

      </div>
    </div>
  );
}

export default PalumnoPage;
