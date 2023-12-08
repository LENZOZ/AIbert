function FormProblem() {
//falta agregar el handleSubmit

  return (
    <div>
      <form className="space-y-3">
        <h2>Notificar Problema</h2>
        <textarea
          className="w-full h-[50px] bg-neutral-200 rounded-lg pl-4"
          placeholder=""
          type="text"
        />
        <div className="my-auto w-[120px] h-[45px]">
          <button className="container flex mx-auto w-full h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl shadow-lg">
            <h1 className="text-white font-poppins text-sm font-semibold uppercase text-center mx-auto my-auto">
              Enviar
            </h1>
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormProblem;
