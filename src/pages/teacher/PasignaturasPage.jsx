
import { Link } from "react-router-dom";
import CardIcon from "../../components/CardIcon.jsx";
import { MdPersonPin } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { FaArrowLeft } from "react-icons/fa6";

function PasignaturaPage() {
  return (
    <div className="h-screen w-screen">
      <div className=" flex justify-between px-10 pt-6">
        <Link to="/login/selector">
        <FaArrowLeft size={55} className="fill-docente" />
        </Link>
      </div>
      <div className="container mx-auto  sm:w-[600px] w-[300px]">
        <div className="grid sm:grid-cols-4 grid-cols-2 place-items-center">
          <CardIcon title="Lenguaje" color="bg-resalte-de-texto" disabled="yes"  to="" ico={<IoPerson />}  />
          <CardIcon title="Matematicas" color="bg-logo-fondo"  to="/profesor/home" ico={<MdPersonPin />}/>
          <CardIcon title="Historia" color="bg-logo-resalte-2" disabled="yes"  to="" ico={<MdPersonPin />}/>
          <CardIcon title="Filosofia" color="bg-sombra-boton" disabled="yes" to="" ico={<MdPersonPin />}/>
          <CardIcon title="Biologia" color="bg-biologia" disabled="yes" to="" ico={<MdPersonPin />}/>
          <CardIcon title="Fisica" color="bg-fisica" disabled="yes" to="" ico={<MdPersonPin />}/>
          <CardIcon title="Quimica" color="bg-logo-resalte" disabled="yes" to="" ico={<MdPersonPin />}/>
          <CardIcon title="Inglés" color="bg-docente" disabled="yes"  to="" ico={<MdPersonPin />}/>
        </div>
      </div>
    </div>
  );
}

export default PasignaturaPage;
