import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import FormEjercicio from '../../components/FormEjercicio'

function EjercicioPage() {
  const { ejercicio } = useContext(UserContext);
  const [contador, setContador] = useState(1);

  return (
    <div className="h-screen w-screen">
      <FormEjercicio ejercicio={ejercicio} contador={contador} />
    </div>
  );
}

export default EjercicioPage;
