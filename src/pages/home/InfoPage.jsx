import Navbar from "../../components/Navbar";

function InfoPage() {
  return (
    <>
      <Navbar />
      <div className="flex align-top h-screen bg-[url('./assets/pattern.png')]">
        <div className="mt-24 mx-auto">
          <div className="container lg:flex md:flex sm:block items-center bg-gradient-to-t from-sky-500 to-indigo-500 w-[80vw]  px-5 py-8 lg:py-14 md:py-14 rounded-lg text-white">
            <div className="lg,md,xl:w-[45%] w-[100%]  p-8">
              <h1 className="font-poppins text-4xl font-bold text-center">
                ¡Bienvenido al fascinante mundo de la ejercitación matemática
                personalizada con Aibert!
              </h1>
              <p className="font-poppins text-base font-normal text-center justify-center mt-10">
                En nuestra página web, Aibert se convierte en tu aliado digital,
                guiándote a través de una experiencia de aprendizaje única y
                adaptativa diseñada específicamente para estudiantes de 7mo a
                1er año de educación media. Permíteme resaltar algunas razones
                convincentes para que te suscribas y descubras el poder de
                Aibert en la educación matemática.
              </p>
              <hr className="my-10" />
              <div className="container">
                <h2 className="font-poppins text-2xl font-bold text-center mt-10">
                  1. Aprendizaje Personalizado con Aibert
                </h2>
                <p className="font-poppins text-base font-normal text-center justify-center mt-3">
                  Imagina tener a Aibert como tu tutor personal. Esta
                  inteligencia artificial analiza tus fortalezas y debilidades
                  matemáticas, creando ejercicios personalizados que se ajustan
                  a tus necesidades individuales. Aibert maximiza tu tiempo de
                  estudio, centrándose en las áreas que necesitan mayor
                  desarrollo.
                </p>
              </div>
              <h2 className="font-poppins text-2xl font-bold text-center mt-10">
                2. Resultados Tangibles con Aibert
              </h2>
              <p className="font-poppins text-base font-normal text-center justify-center mt-3">
                Aibert no solo es una IA; es tu guía hacia el éxito académico.
                Con la combinación de lecciones detalladas y ejercicios
                adaptativos, verás mejoras significativas en tu rendimiento
                matemático. Prepárate para sorprenderte con tus propios logros a
                medida que avanzas en tu aprendizaje con Aibert.
              </p>
              <h2 className="font-poppins text-2xl font-bold text-center mt-10">
                3. Variedad de Contenido Interactivo con Aibert
              </h2>
              <p className="font-poppins text-base font-normal text-center justify-center mt-3">
                La plataforma Aibert ofrece una variedad de ejercicios
                interactivos, juegos matemáticos y desafíos estimulantes. Aibert
                hace que el aprendizaje sea fresco y emocionante, manteniéndote
                comprometido y motivado en tu viaje educativo.
              </p>
              <h2 className="font-poppins text-2xl font-bold text-center mt-10">
                4. Acceso en Cualquier Momento y Lugar con Aibert
              </h2>
              <p className="font-poppins text-base font-normal text-center justify-center mt-3">
                La educación con Aibert no tiene límites. Ofrecemos acceso las
                24 horas, los 7 días de la semana, desde cualquier dispositivo.
                Aibert te permite estudiar cuando y donde quieras, integrando la
                práctica matemática de manera fluida en tu vida cotidiana.
              </p>
              <h2 className="font-poppins text-2xl font-bold text-center mt-10">
                5. Comunidad de Aprendizaje con Aibert
              </h2>
              <p className="font-poppins text-base font-normal text-center justify-center mt-3">
                Aibert no solo es tu tutor, sino que también te conecta con una
                comunidad vibrante de estudiantes que comparten tus intereses y
                desafíos. Participa en discusiones, comparte consejos y colabora
                en proyectos. Aibert fomenta la colaboración y el apoyo mutuo
                para alcanzar el éxito académico.
              </p>
              <h2 className="font-poppins text-2xl font-bold text-center mt-10">
                6. Prueba Gratuita con Aibert
              </h2>
              <p className="font-poppins text-base font-normal text-center justify-center mt-3 ">
                Queremos que confíes en Aibert. Por eso, ofrecemos una prueba
                gratuita para que explores todas las características y
                experimentes los beneficios antes de comprometerte. Estamos
                seguros de que te enamorarás de la experiencia de aprendizaje
                personalizada que Aibert ofrece.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InfoPage;
