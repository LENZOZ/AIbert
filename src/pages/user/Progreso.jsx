import SeccionBar from "../../components/SeccionBar";
import Secciones from "../../components/Secciones";
import SideBar from "../../components/SideBar";
import BarText from "../../components/BarText";
import GraphicBar from "../../components/GraphicBar";

import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

function Progreso() {
  const { objetivos } = useContext(UserContext);
  const { user } = useContext(UserContext);

  return (
    <div className="flex bg-fondo">
      <SideBar />
      <div className="w-full h-full p-2 space-y-2">
        <BarText title="Matematicas" />
        <div className="bg-white rounded-lg p-2">
          <GraphicBar uid={user?.uid} />
        </div>
        {objetivos.map((objetivo, i) => {
          return (
            <div key={i}>
              <Secciones
                title={objetivo.nombre}
                id={objetivo.id}
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
