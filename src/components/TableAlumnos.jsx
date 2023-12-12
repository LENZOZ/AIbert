import {Link} from 'react-router-dom';
import { FaCircleArrowRight } from "react-icons/fa6";

function TableAlumnos({curso}) {
  return (
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
                        {estudiante.nombre}
                      </td>
                      <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                        OB.2
                        {/* Hay que averiguar de donde chingados sacarlos */}
                      </td>
                      <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                        {curso.nivel}
                      </td>
                      <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                        <Link
                          className="h-fit w-fit"
                          to={"/profesor/curso/alumno/" + estudiante.estudianteID}
                        >
                          <FaCircleArrowRight
                            className="fill-logo-resalte"
                            size={25}
                          />
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
  )
}

export default TableAlumnos