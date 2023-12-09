import InfoTime from "../../components/InfoTime";
import PSideBar from "../../components/PSideBar";

import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

import { FaCircleArrowRight } from "react-icons/fa6";


function PcursoPage() {
  const params = useParams();
  const { cursos } = useContext(UserContext);

  const curso = cursos.find((obj) => {
    return obj.cursoID === params.id;
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
            <h1>{curso.nombre}</h1>
          </div>
        </div>
        <div className="relative rounded-lg overflow-auto">
          <div className="shadow-sm rounded-lg overflow-hidden">
            <table className="border-collapse table-auto w-full text-sm font-poppins">
              <thead className="bg-docente text-white">
                <tr>
                  <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 dark:text-slate-200 text-left">
                    Alumnos
                  </th>
                  <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 dark:text-slate-200 text-left">
                    Objetivo
                  </th>
                  <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 dark:text-slate-200 text-left">
                    Nivel
                  </th>
                  <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 dark:text-slate-200 text-left">
                    Detalles
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-slate-800">
                {curso.alumnos.map((estudiante, i) => {
                  return (
                    <tr key={i}>
                      <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                        {estudiante}
                      </td>
                      <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                        OB.2{/* Hay que averiguar de donde chingados sacarlos */}
                      </td>
                      <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                        {curso.nivel}
                      </td>
                      <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                        <Link className="h-fit w-fit" to={"/profesor/curso/alumno/" + estudiante}>
                        <FaCircleArrowRight className="fill-logo-resalte" size={25} />
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PcursoPage;
