import { NavLink } from "react-router-dom";

function ButtonS({ to = "/registro", title = "boton", text = "text-sm" }) {
  return (
    <NavLink
      to={to}
      className="container flex mx-auto w-full h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl shadow-lg hover:from-cyan-600 hover:to-blue-600"
    >
      <h1 className={"text-white font-poppins font-semibold uppercase mx-auto my-auto " + text}>{title}</h1>
    </NavLink>
  );
}

export default ButtonS;
