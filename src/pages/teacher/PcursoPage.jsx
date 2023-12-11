import InfoTime from "../../components/InfoTime";
import PSideBar from "../../components/PSideBar";

import { useParams } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

import BarTitle from "../../components/BarTitle";
import TableAlumnos from "../../components/TableAlumnos";

function PcursoPage() {
  const params = useParams();
  const { cursos} = useContext(UserContext);

  const curso = cursos.find((obj) => {
    return obj.cursoID === params.id;
  });

  return (
    <div className="flex bg-fondo saturate-[110%]">
      <PSideBar />
      <div className="w-full h-full p-2 space-y-2">
        <InfoTime color="bg-docente" />
        <BarTitle to="/profesor/home" title={curso.nombre} />
        <TableAlumnos curso={curso}/>
      </div>
    </div>
  );
}

export default PcursoPage;
