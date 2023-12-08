import ButtonS from "../components/ButtonS";
import { IoMdClose } from "react-icons/io";
import CardLogin from "../components/CardLogin.jsx";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div className="h-screen w-screen">
      <div className=" flex justify-between px-10 pt-6">
        <Link to="/">
        <IoMdClose size={55} className="fill-sombra-boton" />
        </Link>
        <div className="my-auto w-[130px] h-[45px]">
          <ButtonS title="REGÍSTRATE" />
        </div>
      </div>
      <div className="flex justify-center">
        <CardLogin/>
      </div>
    </div>
  );
}

export default LoginPage;
