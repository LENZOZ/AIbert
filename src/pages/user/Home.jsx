import InfoTime from "../../components/InfoTime";
import SideBar from "../../components/SideBar";
import profesor from "../../assets/profesor.png";
import ButtonS from "../../components/ButtonS";
import BarText from '../../components/BarText'

import {useContext} from 'react'
import {UserContext} from '../../context/UserContext'

function Home() {

  const {user} = useContext(UserContext);

  return (
    <div className="flex bg-fondo">
      <SideBar />
      <div className="w-full h-full p-2 space-y-2">
        <BarText title="Matematicas" />
        <InfoTime />
        <div className="w-full grid grid-cols-1 space-y-2 place-content-center">
          <img className="mx-auto w-[340px] h-[340px] object-cover" src={profesor} />
          <div className="mx-auto w-[120px] h-[45px]">
            <ButtonS title="Entrenar" to={"/estudiante/ejercicio/"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
