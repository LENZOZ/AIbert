import ButtonFace from "./ButtonFace";
import ButtonGoogle from './ButtonGoogle'
import ButtonS from "./ButtonS";

import {useContext} from 'react'
import {UserContext} from '../context/UserContext'


function CardLogin() {

  const {user, login, logout} = useContext(UserContext)
  //console.log(user)

  return (
    <div className="border-solid p-5 m-3 text-center w-[350px] bg-white inline-block">
      <h2 className="py-3 font-poppins font-bold">Ingresar</h2>

      <form className="space-y-3">
        <input
          className="w-full h-[50px] bg-neutral-200 rounded-lg pl-4"
          type="email"
          placeholder="Correo"
        ></input>
        <input
          className="w-full h-[50px] bg-neutral-200 rounded-lg pl-4"
          type="password"
          placeholder="Contraseña"
        ></input>
        <div className="w-full h-[50px]">
          <ButtonS to="/login/selector" title="ingresar" />
        </div>
        <hr className="border-sombra-boton border-b-1 shadow-xl" />
        <div className="w-full flex space-x-2 pt-3">
          <div className="w-1/2 h-[50px]">
            <ButtonFace to="https://www.facebook.com/" title="Facebook" />
          </div>
          <div className="w-1/2 h-[50px]">
            <ButtonGoogle to="https://www.google.com/" title="Google" />
          </div>
        </div>
        <p className="font-poppins font-light text-gray-400 text-[10px]">Al registrarte en AIBert, aceptas nuestros Términos y Políticas de privacidad.</p>
      </form>

      {user ? (
        /*Existe?*/ <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={login}>Login</button>
      )}
      
    </div>
  );
}

export default CardLogin;
