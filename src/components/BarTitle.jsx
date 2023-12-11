import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
function BarTitle( {to="/", title="", handleclick=""}) {
  return (
    <div
      className={
        "flex w-full rounded-lg h-fit p-2 m-auto place-content-center font-poppins font-bold text-4xl text-white uppercase bg-docente"
      }
    >
      <div className="grid grid-cols-3 w-full text-center my-auto">
        <Link onClick={handleclick} to={to} className="h-fit w-fit"> 
            <FaArrowLeft className="fill-white" />
        </Link>
        <h1>{title}</h1>
      </div>
    </div>
  );
}

export default BarTitle;
