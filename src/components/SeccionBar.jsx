import { MdPageview } from "react-icons/md";
import { Link } from "react-router-dom";

function SeccionBar({ title="example", description="example", to="/estudiante/home" }) {

  return (
    <Link to={to} className="flex justify-between w-full bg-logo-fondo rounded-lg h-fit p-2 my-auto font-poppins font-bold text-sm text-white">
      <div className="space-y-1 my-auto">
        <h1>{title}</h1>
        <h2 className="font-normal text-xs">{description}</h2>
      </div>
      <div className="container my-auto w-fit text-center ml-auto">
          <div className="text-5xl sm:ml-0  px-2 shadow-recta rounded-lg">
            <MdPageview />
            <p className="text-sm">Info</p>
          </div>
      </div>
    </Link>
  );
}

export default SeccionBar;
