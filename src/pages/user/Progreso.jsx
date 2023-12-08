import SeccionBar from "../../components/SeccionBar";
import Secciones from "../../components/Secciones";
import SideBar from "../../components/SideBar";

import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

function Progreso() {
  const { objetivos } = useContext(UserContext);

  return (
    <div className="flex bg-fondo">
      <SideBar />
      <div className="w-full h-full p-2 space-y-2">
        {objetivos.map((objetivo, i) => {
          return (
            <div key={i}>
              <Secciones
                title={objetivo.nombre}
                id={objetivo.objetivoID}
                description={objetivo.descripcion}
                img={objetivo.url}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Progreso;
