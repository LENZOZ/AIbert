import Navbar from "../../components/Navbar";
import CardCircle from "../../components/CardCircle";
import perfil1 from '../../assets/perfil1.jpg'
import perfil2 from '../../assets/perfil2.png'
import perfil3 from '../../assets/perfil3.jpg'

function AboutPage() {
  return (
    <>
      <Navbar />
      <div className="flex align-top h-screen bg-[url('./assets/pattern.png')]">
        <div className="mt-24 mx-auto text-center">
          <div className="container block items-center bg-gradient-to-t from-sky-500 to-indigo-500 w-[80vw]  px-5 py-8 lg:py-14 md:py-14 rounded-lg">
            <h1 className="font-poppins text-4xl font-bold text-center text-white pb-5">
              Conoce al Equipo
            </h1>
            <p className="text-white">
              ¡El equipo de desarrollo de Aibert es el motor que impulsa la
              innovación y la excelencia en el ámbito de la inteligencia
              artificial y la programación educativa! Compuesto por mentes
              brillantes y apasionadas, nuestro equipo está dedicado a llevar la
              experiencia de aprendizaje personalizado a nuevas alturas.
            </p>
            <hr className="my-5" />
            <CardCircle 
            title="Cristopher Mujica" 
            description="Desarrollador Frontend"
            img={perfil1}
            to="https://www.instagram.com/puxe_vlm/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA=="
            target="_blank"
            />
            <CardCircle 
            title="Lorenzo Baeza" 
            description="Desarrollador full stack"
            img={perfil3}
            to="https://www.instagram.com/l0r3n_z0/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA=="
            target="_blank"
            />
            <CardCircle 
            title="Matías Vargas" 
            description="Soporte y gestión de proyectos"
            img={perfil2}
            to="https://www.instagram.com/ironmatii/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA=="
            target="_blank"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
