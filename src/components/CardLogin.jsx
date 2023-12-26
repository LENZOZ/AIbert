import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import GoogleSignIn from './GoogleSignIn';
import UserRegistrationForm from './UserRegistrationForm';
import { UserContext } from '../context/UserContext';

function CardLogin() {
  const { user, login, logout } = useContext(UserContext);
  const [newUserInfo, setNewUserInfo] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleNewUser = (userInfo) => {
    setNewUserInfo(userInfo);
  };

  const handleLogin = async () => {
    try{
    // Aquí llamamos a la función de inicio de sesión de UserContext
    await login(email, password);
    // Verificar el rol del usuario para redireccionar adecuadamente
    if (user && user.rol === 'profesor') {
      navigate('/profesor/home');
    } else {
      navigate('/estudiante/home');
    }
  } catch (error) {
    let message = 'Ocurrió un error al iniciar sesión.';
      if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
        message = 'Correo electrónico o contraseña incorrectos.';
      }else if (error.code === 'auth/invalid-credential') {
        message = 'Las credenciales proporcionadas son inválidas.';
      }
      setErrorMessage(message); // Establece el mensaje de error
  }
};

  if (newUserInfo) {
    return <UserRegistrationForm userInfo={newUserInfo} />;
  }

  return (
    <div className="border-solid p-5 m-3 text-center w-[350px] bg-white inline-block">
      <h2 className="py-3 font-poppins font-bold">Ingresar</h2>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
        <input
          className="w-full h-[50px] bg-neutral-200 rounded-lg pl-4"
          type="email"
          placeholder="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="w-full h-[50px] bg-neutral-200 rounded-lg pl-4"
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="w-full h-[50px]">
          <button type="button" onClick={handleLogin}>Ingresar</button>
        </div>
        <GoogleSignIn onNewUser={handleNewUser} />
        <p className="font-poppins font-light text-gray-400 text-[10px]">
          Al registrarte en AIBert, aceptas nuestros Términos y Políticas de privacidad.
        </p>
      </form>
    </div>
  );
}

export default CardLogin;
