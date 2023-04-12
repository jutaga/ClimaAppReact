import { useEffect, useState } from "react"
import { Formulario } from "./components/Formulario"
import { Header } from "./components/Header"
import { Form } from "./interfaces/Form.interface"
import { APIResp } from './interfaces/ApiResp.Interface';
import { Clima } from "./components/Clima";


export const App = () => {

  const [valores, setValores] = useState<Form>({
    ciudad: '',
    pais: ''
  })

  const [consultar, setConsultar] = useState(false);
  const [resultadoConsulta, setresultadoConsulta] = useState<APIResp>();

  const { ciudad, pais } = valores;



  useEffect(() => {

    const consultarApi = async () => {
      const apiUrl: string = 'http://api.openweathermap.org/data/2.5'
      const apiKey: string = '9e94dc457873f0a900180171040195c5'
      const url: string = `${apiUrl}/weather?q=${ciudad},${pais}&appid=${apiKey}`

      const respuesta: Response = await fetch(url);
      const resultado: APIResp = await respuesta.json();

      setresultadoConsulta(resultado);
    }

    if (consultar) consultarApi();

  }, [valores])


  return (
    <>
      <Header title='Clima React App' />

      <div className="container-fluid bg-primary opacity-75">
        <div className="container">
          <div className="row p-3">
            <div className="col-md-6 mt-2">
              <Formulario setConsultar={setConsultar} setValores={setValores} />
            </div>
            <div className="col-md-6 mt-2">
              <Clima resultadoApi={resultadoConsulta} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
