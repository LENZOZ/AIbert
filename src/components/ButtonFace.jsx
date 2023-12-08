import { NavLink } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";

function ButtonFace({ to = "https://www.facebook.com/", title = "boton" }) {
  return (
    <NavLink
      to={to}
      className="container flex mx-auto w-full h-full bg-white rounded-2xl shadow-lg"
    >
      <FaFacebookF size={30} className="ml-3 my-auto fill-blue-500" />
      <h1 className="text-blue-500 font-poppins text-sm font-bold uppercase mx-auto my-auto pr-5">
        {title}
      </h1>
    </NavLink>
  );
}

export default ButtonFace;
