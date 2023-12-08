import Navbar from "../components/Navbar";

function NotFoundPage() {
  return (
    <>
      <Navbar />
      <div className="flex align-top h-screen bg-[url('./assets/pattern.png')]">
        <div className="mt-20">
          <h1>NotFoundPage</h1>
          <h2>Esto es una prueba</h2>
        </div>
      </div>
    </>
  );
}
export default NotFoundPage;
