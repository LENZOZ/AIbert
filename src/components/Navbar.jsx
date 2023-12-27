import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState, useEffect } from "react";
import ButtonS from "./ButtonS";

function Navbar() {
  const [hamburger, setHamburger] = useState(false);

  return (
    <nav className="bg-white border-b-2 border-sombra-boton h-20 w-full fixed shadow-lg">
      <div className="lg:flex justify-between items-center translate-y-[15%]">
        <div className="float-right items-center lg:hidden mr-10 mt-4 pl-20 py-1">
          <GiHamburgerMenu
            onClick={() => {
              hamburger ? setHamburger(false) : setHamburger(true);
            }}
            size={25}
            className="fill-sombra-boton"
          />
        </div>
        <ul className="lg:flex justify-start ml-[50px] items-center">
          {" "}
          {/*Logo */}
          <li>
            <NavLink to="/">
              <img src={logo} alt="Logo" className="max-w-[150px]" />
            </NavLink>
          </li>
        </ul>
        <ul
          className={
            "lg:flex float-right justify-end mr-20 items-center space-x-4 lg:space-y-0 space-y-6 lg:mt-0 text-sombra-boton rounded uppercase fixed lg:static h-auto lg:h-0 w-screen lg:w-fit mt-[7px] bg-white text-center lg:pt-0 lg:pb-0 pt-10 pb-10 lg:shadow-none lg:border-none border-b-2 border-sombra-boton shadow-lg lg:top-0" +
            (hamburger ? "" : " top-[-300px]")
          }
        >
          {" "}
          {/*Text */}
          <li>
            <NavLink
              to="/info"
              className="font-poppins lg:pl-10 font-bold min-w-[200px] hover:text-cyan-500"
            >
              ¿Porque Aibert?
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/price"
              className="font-poppins lg:pl-10 font-bold min-w-[200px] hover:text-cyan-500"
            >
              Precios
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="font-poppins lg:pl-10 font-bold min-w-[200px] hover:text-cyan-500"
            >
              Acerca de Nosotros
            </NavLink>
          </li>
          <li>
            <div className="mx-auto h-[45px] lg:w-[130px] w-[85%]">
            <ButtonS to="/login" title="ingresa" />
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
