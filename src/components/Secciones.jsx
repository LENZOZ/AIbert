import SeccionBar from "./SeccionBar";

function Secciones({ title, description, img, id }) {
  return (
    <div className="w-full grid grid-cols-1 space-y-2 place-content-center">
      <SeccionBar title={title} description={description} to={"/estudiante/progreso/" + id} />
      <img
        className="w-full object-contain sm:h-[350px] rounded-2xl hover:shadow-hover"
        src={img}
      />
    </div>
  );
}

export default Secciones;
