import { Link } from "react-router-dom";

function Card({
  title,
  description,
  img = "https://via.placeholder.com/150",
  to,
  target,
}) {
  return (
    <Link
      to={to}
      target={target}
      className="border-solid rounded-md shadow-xl p-5 m-3 text-center min-w-250 bg-white inline-block"
    >
      <img
        className="block mx-auto rounded-full object-cover w-[150px] h-[150px]"
        src={img}
        alt="Foto de perfil"
      />
      <h2 className="py-3 font-poppins font-bold">{title}</h2>
      <p>{description}</p>
    </Link>
  );
}

export default Card;
