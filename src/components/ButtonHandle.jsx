function ButtonHandle({ handle, title = "boton" }) {
  return (
    <button
      type="button"
      onClick={handle}
      className="container flex w-full h-[45px] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl shadow-lg hover:from-cyan-600 hover:to-blue-600"
    >
      <h1 className="text-white font-poppins text-sm font-semibold uppercase mx-auto my-auto">
        {title}
      </h1>
    </button>
  );
}

export default ButtonHandle;
