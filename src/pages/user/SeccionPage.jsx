import SideBar from "../../components/SideBar";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import SeccionBar from "../../components/SeccionBar";

function SeccionPage() {
  const params = useParams();
  const { objetivos } = useContext(UserContext);
  const objetivo = objetivos.find((obj) => {
    return obj.objetivoID === params.id;
  });

  return (
    <div className="flex bg-fondo">
      <SideBar />
      <div className="w-full h-screen p-2 space-y-2">
        <SeccionBar
          className="row-span-1"
          title={objetivo.nombre}
          description={objetivo.descripcion}
        />
        <div className="w-full p-2 rounded-lg font-poppins font-normal text-sm text-texto-pequeno-negro bg-white space-y-3">
          {/**Hay que revisar como rellenar esta parte de manera automatica */}
          <h1 className="text-texto-grande-negro font-bold">Repaso</h1>
          <p>
            {objetivo.descripcion}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SeccionPage;
