import { ClimaProp } from "../interfaces/Props.interface"


export const Clima = ({ resultadoApi }: ClimaProp) => {
  const { main, name } = resultadoApi ?? {}

  return (
    <div className="bg-light p-2 w-100 rounded-3">
      <div>
        <h2 className="text-center">El clima de {name} es: </h2>
        <p className=" ms-3 text-center fw-bold display-3">{main?.temp}</p>
      </div>
    </div>
  )
}
