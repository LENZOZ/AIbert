function BarTitle({ title = "" }) {
  return (
    <div
      className={
        "flex w-full rounded-lg h-fit p-2 m-auto place-content-center font-poppins font-bold text-4xl text-white uppercase bg-logo-fondo"
      }
    >
      <div className="grid grid-cols-1 w-full text-center mx-auto my-auto">
        <h1>{title}</h1>
      </div>
    </div>
  );
}

export default BarTitle;
