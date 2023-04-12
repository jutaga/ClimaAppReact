import { ClimaProp } from "../interfaces/Props.interface"


export const Clima = ({ resultadoApi }: ClimaProp) => {
  const { main, name } = resultadoApi ?? {}

  //Transformar A grados Kelvin
  const kelvin = 273.15;

  return (
    <div className="bg-light rounded-3 bg-body-secondary p-4 rounded-4">
      <div>
        <h2 className="text-center">El clima de {name} es: </h2>
        <p className="text-center fw-bold display-3">{main?.temp ? (main?.temp - kelvin).toFixed(2) : ''}  <span>&#x2103;</span></p>
        <p className=" text-center fw-bold fw-2">Temperatura Maxima: {main?.temp_max ? (main?.temp_max - kelvin).toFixed(2) : ''}  <span>&#x2103;</span></p>
        <p className="text-center fw-bold fw-2">Temperatura Minima: {main?.temp_min ? (main?.temp_min - kelvin).toFixed(2) : ''}  <span>&#x2103;</span></p>
      </div>
    </div>
  )
}
