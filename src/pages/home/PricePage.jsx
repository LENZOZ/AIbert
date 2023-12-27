import Navbar from "../../components/Navbar";
import Card from "../../components/Card";
import precio1 from "../../assets/precio1.jpg";
import precio2 from "../../assets/precio2.jpg";
import precio3 from "../../assets/precio3.jpg";

function PricePage() {
  return (
    <>
      <Navbar />
      <div className="flex align-top h-screen bg-[url('./assets/pattern.png')]">
        <div className="mt-24 mx-auto text-center">
          <div className="container block items-center bg-gradient-to-t from-sky-500 to-indigo-500 w-[80vw]  px-5 py-8 lg:py-14 md:py-14 rounded-lg">
            <h1 className="font-poppins text-4xl font-bold text-center text-white pb-5">
              Planes
            </h1>
            <p className="font-poppins text-white">
              Estamos encantados de ofrecerte tres emocionantes planes de
              suscripción diseñados para adaptarse a tus necesidades y llevar la
              ejercitación matemática personalizada a un nuevo nivel.
            </p>
            <hr className="my-5" />
            <Card
              title="Plan Invidual"
              description="$9.990/mes"
              img={precio1}
              to="https://youtu.be/_e9yMqmXWo0?si=ppO66RKp5wUfPnla"
              target="_blank"
            />
            <Card
              title="Plan Familiar"
              description="$24.990/mes"
              img={precio2}
              to="https://youtu.be/JhDIILjlhBQ?si=vgJX_mTiEjf36HDp"
            />
            <Card
              title="Plan Establecimiento"
              description="A Consultar"
              img={precio3}
              to="https://www.youtube.com/watch?v=QX43QTYyV-8"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default PricePage;
