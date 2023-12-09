
function ButtonS({ handle, title = "boton" }) {
  return (
    <button
      onClick={handle}
      className="container flex w-[120px] h-[45px] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl shadow-lg"
    >
      <h1 className="text-white font-poppins text-sm font-semibold uppercase mx-auto my-auto">{title}</h1>
    </button>
  );
}

export default ButtonS;
