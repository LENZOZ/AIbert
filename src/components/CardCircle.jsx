import { Link } from "react-router-dom";

function CardCircle({
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
      className="border-solid rounded-md shadow-xl p-5 m-3 text-center min-w-250 bg-white inline-block hover:-translate-y-1 hover:scale-110 duration-300"
    >
      <img
        className="block mx-auto rounded-full object-cover w-[150px] h-[150px]"
        src={img}
        alt="Foto de perfil"
      />
      <h2 className="py-3 font-poppins font-bold">{title}</h2>
      <p className="max-w-[160px]">{description}</p>
    </Link>
  );
}

export default CardCircle;
