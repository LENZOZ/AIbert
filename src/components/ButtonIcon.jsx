import { NavLink } from "react-router-dom";

function ButtonIcon({ to = "/", title = "boton", icon, target, color="text-iconos" }) {
  return (
    <NavLink
      to={to}
      target={target}
      className="container flex mx-auto w-full h-[45px] bg-white rounded-md hover:bg-indigo-50"
    >
      <h1 className={"text-4xl my-auto px-2 " + color }>{icon}</h1>
      <h1 className="text-neutral-500 font-poppins text-xs font-bold uppercase my-auto pr-8 hidden sm:block">
        {title}
      </h1>
    </NavLink>
  );
}

export default ButtonIcon;
