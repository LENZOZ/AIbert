import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import CardIcon from "../components/CardIcon.jsx";
import { MdPersonPin } from "react-icons/md";
import { IoPerson } from "react-icons/io5";

function LoginSelector() {
  return (
    <div className="h-screen w-screen">
      <div className=" flex justify-between px-10 pt-6">
        <Link to="/">
        <IoMdClose size={55} className="fill-sombra-boton" />
        </Link>
      </div>
      <div className="flex justify-center">
        <CardIcon title="Alumno" color="bg-iconos"  to="/estudiante/asignaturas" ico={<IoPerson />}  />
        <CardIcon title="Docente" color="bg-docente"  to="/profesor/asignaturas" ico={<MdPersonPin />}/>
      </div>
    </div>
  );
}

export default LoginSelector;
