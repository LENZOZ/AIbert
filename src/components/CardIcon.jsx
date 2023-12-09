import { Link } from "react-router-dom";

function CardIcon({ title, ico, color, to="/", disabled }) {
  if  (!!disabled) {
    disabled = "opacity-50 pointer-events-none"
  }
  
  return (
    <Link
      to={to}
      className={"transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 rounded-md shadow-xl m-3 text-center w-[130px] h-[150px] block"+ " " + color + " " + disabled} 
    >
      <h1 className="text-6xl text-white px-8 pt-6">
        {ico}
      </h1>
      <h2 className="py-3 font-poppins font-bold text-sm uppercase text-white">{title}</h2>
    </Link>
  );
}

export default CardIcon;
