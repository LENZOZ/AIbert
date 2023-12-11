import InfoTime from "../../components/InfoTime";
import PSideBar from "../../components/PSideBar";
import CardIcon from "../../components/CardIcon";
import { FaAddressBook } from "react-icons/fa6";

import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

function PhomePage() {
  const { cursos } = useContext(UserContext);

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
            <h1>mis cursos</h1>
          </div>
        </div>

        <div className="container mx-auto  sm:w-[95%] w-[100%] ">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 grid-cols-2 place-items-center">
            {cursos.map((curso, i) => {
              return (
                <div key={i}>
                  <CardIcon
                    title={curso.nombre + " " + curso.nivel}
                    color="bg-logo-fondo"
                    to={"/profesor/curso/" + curso.cursoID}
                    ico={<FaAddressBook />}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhomePage;
