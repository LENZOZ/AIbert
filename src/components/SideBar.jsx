import logo from "../assets/logo.png";
import logo2 from "../assets/logo2.png";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

import { MdWater } from "react-icons/md";
import { IoMdMap } from "react-icons/io";
import { RiRobot2Fill } from "react-icons/ri";
import { IoSettingsSharp } from "react-icons/io5";
import { MdStars } from "react-icons/md";
import { MdExitToApp } from "react-icons/md";

import ButtonIcon from "./ButtonIcon";

function SideBar() {
  const { logout } = useContext(UserContext);

  return (
    <nav className="container sm:w-[230px] w-[100px] h-screen sticky top-0 bg-white shadow-2xl">
      <div>
        <ul className="grid space-y-2 pl-4 pr-4 mt-6">
          <li>
            <img className="mb-6 mt-4 w-[50px] sm:hidden" src={logo2} />
            <img className="mb-4 sm:block hidden" src={logo} />
          </li>
          <li>
            <ButtonIcon
              title="Mi Camino"
              to="/estudiante/home"
              icon={<MdWater />}
            />
          </li>
          <li>
            <ButtonIcon
              title="progreso"
              to="/estudiante/progreso"
              icon={<IoMdMap />}
            />
          </li>
          <li>
            <ButtonIcon
              title="ChatBot"
              to="/estudiante/chatbot"
              icon={<RiRobot2Fill />}
            />
          </li>
          <li>
            <ButtonIcon
              title="Configuracion"
              to="/estudiante/configuracion"
              icon={<IoSettingsSharp />}
            />
          </li>
          <li>
            <ButtonIcon
              title="Siguenos"
              to="https://cat-bounce.com"
              target="_blank"
              icon={<MdStars />}
            />
          </li>
          <li onClick={logout}>
            <ButtonIcon title="Salir" to="/" icon={<MdExitToApp />} />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default SideBar;
