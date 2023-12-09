import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import FormEjercicio from '../../components/FormEjercicio'

function EjercicioPage() {
  const { ejercicio } = useContext(UserContext);

  return (
    <div className="h-screen w-screen">
      <FormEjercicio ejercicio={ejercicio} />
    </div>
  );
}

export default EjercicioPage;
