function FormAvatar() {
  //falta agregar el handleSubmit

  return (
    <div>
      <form className="space-y-3" /*onSubmit={}*/>
        <p>Seleccionar Avatar</p>
        <div className="my-auto w-[120px] h-[45px]">
          <button className="container flex mx-auto w-full h-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 rounded-xl shadow-lg">
            <h1 className="text-white font-poppins text-sm font-semibold uppercase text-center mx-auto my-auto">
              Enviar
            </h1>
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormAvatar;
