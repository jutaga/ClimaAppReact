import { ErrorMsjProp } from "../interfaces/Props.interface"

export const ErrorMsj = ({mensaje}: ErrorMsjProp) => {
  return (
    <div className="alert alert-danger text-center">
        {mensaje}
    </div>
  )
}
