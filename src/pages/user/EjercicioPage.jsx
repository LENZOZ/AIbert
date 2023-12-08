import BarProgress from "../../components/BarProgress"

function EjercicioPage() {
  return (
    <div className="container h-screen w-screen mx-auto p-2 space-y-2">
        <BarProgress total={10} number={4} />

    </div>
  )
}

export default EjercicioPage