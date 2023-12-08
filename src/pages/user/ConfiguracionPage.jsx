import SideBar from "../../components/SideBar";
import FormProblem from "../../components/FormProblem";
import FormPass from "../../components/FormPass";
import FormAvatar from "../../components/FormAvatar";

function ConfiguracionPage() {
  return (
    <div className="flex bg-fondo">
      <SideBar />
      <div className="w-full h-screen p-2">
        <div className="w-full h-full p-6 rounded-lg font-poppins text-xs bg-white space-y-3 uppercase">
          <h1 className="text-base font-bold">Configuracion</h1>
          
          <FormAvatar />

          <FormPass />

          <FormProblem />
          
        </div>
      </div>
    </div>
  );
}

export default ConfiguracionPage;
