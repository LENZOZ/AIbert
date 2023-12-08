import Navbar from "../../components/Navbar";
import homefemale from "../../assets/home-female.jpg";
import {useContext} from 'react'
import {UserContext} from '../../context/UserContext'

function HomePage() {
  
  // const valor = useContext(UserContext)
  // console.log(valor)

  return (
    <>
      <Navbar />
      <div className="flex align-top h-screen bg-[url('./assets/pattern.png')]">
        <div className="mt-24 mx-auto">
          <div className="container lg:flex md:flex sm:block items-center bg-gradient-to-t from-sky-500 to-indigo-500 w-[80vw]  px-5 py-8 lg:py-14 md:py-14 rounded-xl text-white">
            <div className="lg,md,xl:w-[45%] w-[100%]  p-8">
              <h1 className="font-poppins text-4xl font-bold text-center">
                ¡Bienvenido a AIBert!
              </h1>
              <p className="font-poppins text-base font-medium text-center justify-center">
                Pioneros en la implementacion de inteligencia artificial en la
                educacion de nuestros alumnos
              </p>
            </div>
            <div className="lg,xl,md:w-[55%] w-[90%] block mx-auto">
              <img className="rounded-lg" src={homefemale} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
