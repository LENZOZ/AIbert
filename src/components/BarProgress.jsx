function BarProgress({ total = 10, number = 2 }) {
  var porcentaje = (number * 100) / total + "%";
  return (
    <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-neutral-300">
      <div className="bg-logo-fondo h-4 rounded-full" style={{width: porcentaje}} />
    </div>
  );
}

export default BarProgress;
