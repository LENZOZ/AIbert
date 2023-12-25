import { NavLink } from "react-router-dom";

function ButtonS({ to = "/registro", title = "boton" }) {
  return (
    <NavLink
      to={to}
      className="container flex mx-auto w-full h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl shadow-lg"
    >
      <h1 className="text-white font-poppins text-sm font-semibold uppercase mx-auto my-auto">{title}</h1>
    </NavLink>
  );
}

export default ButtonS;
