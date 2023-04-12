import { useEffect, useState } from "react"
import { Formulario } from "./components/Formulario"
import { Header } from "./components/Header"
import { Form } from "./interfaces/Form.interface"


export const App = () => {

  const [valores, setValores] = useState<Form>({
    ciudad: '',
    pais: ''
  })

  const [consultar, setConsultar] = useState(false);

  const { ciudad, pais } = valores;

  useEffect(() => {

    
    console.log(ciudad, pais);
  }, [valores])


  return (
    <>
      <Header title='Clima React App' />

      <div className="container-fluid bg-primary opacity-75">
        <div className="container">
          <div className="row p-3">
            <div className="col-md-6 mt-2">
              <Formulario setValores={setValores} />
            </div>
            <div className="col-md-6 mt-2">
              2
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
